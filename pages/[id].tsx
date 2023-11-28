import { useState } from "react";
import { db } from "../firebase/config";
import styles from "../styles/new.module.css";
import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const getStaticPaths = async () => {
  const documents = await getDocs(collection(db, "todo-items"));

  //console.log(documents);

  const paths = documents.docs.map((item) => {
    //console.log(item.id);

    return {
      params: { id: item.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const docRef = doc(db, "todo-items", id);

  const docSnap = await getDoc(docRef);

  const documents = docSnap.data();
  documents.id = id;

  return {
    props: { item: documents },
  };
};

const Todo = ({ item }) => {
  //console.log(item);

  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [hasDeadline, setHasDeadline] = useState(item.hasDeadline);
  const [isPublic, setIsPublic] = useState(item.isPublic);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [attachedFile, setAttachedFile] = useState(item.attachedFile);

  const { user } = useAuthContext();
  const router = useRouter()

  if (!user) {
    router.push("/login");
    return null;
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleFileChange = (e) => {
    setAttachedFile(null);

    let selected = e.target.files[0];

    if (!selected || !selected.type.includes("image")) {
      return;
    }

    setAttachedFile(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let day = null,
      month = null,
      year = null,
      hours = null,
      minutes = null;

    if (selectedDate && hasDeadline) {
      day = selectedDate.getDate();
      month = selectedDate.getMonth() + 1; // Adding 1 to get the correct month (January is 0)
      year = selectedDate.getFullYear();
      hours = selectedDate.getHours();
      minutes = selectedDate.getMinutes();
    }

    let todoItem = {
      uid: user.uid,
      title,
      description,
      hasDeadline,
      day,
      month,
      year,
      hours,
      minutes,
      isPublic,
      attachedFile: null,
      done: false,
    };

    //console.log(todoItem);
    //console.log(user);

    await setDoc(doc(db, "todo-items", item.id), todoItem);

    //addDocument(todoItem, attachedFile);
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="max-w-xl w-full rounded-lg border border-gray-700 bg-gray-800 flex flex-col p-8">
        <img className="rounded-t-lg" src="" alt="" />
  
        <div className="flex flex-col flex-grow p-5">
          <h5 className="text-3xl font-bold tracking-tight text-white mb-4">
            {item.title}
          </h5>
          <p className="mb-6 flex-grow overflow-hidden text-lg text-gray-400">
            {item.description}
          </p>
          {item.hasDeadline && (
            <p className="text-gray-300">
              Due to {item.day}/{item.month}/{item.year} until {item.hours}:{item.minutes}
            </p>
          )}
  
          {/* attached file */}
        </div>
      </div>
    </div>
  );
  
};

export default Todo;
