import { useState } from "react";
import { db, storage } from "../../firebase/config";
import styles from "../../styles/new.module.css";
import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ref } from "firebase/storage";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";

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

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    item.hasDeadline
      ? new Date(item.year, item.month - 1, item.day, item.hours, item.minutes)
      : null
  );
  const [hasDeadline, setHasDeadline] = useState(item.hasDeadline);
  const [isPublic, setIsPublic] = useState(item.isPublic);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const { user } = useAuthContext();
  const [attachedFile, setAttachedFile] = useState(item.attachedFile);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

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

    setIsPending(true);

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

    try {
      await setDoc(doc(db, "todo-items", item.id), todoItem);

      if (typeof attachedFile == "string") {
        // If the attached file is a URL, update the Firestore document with the URL
        todoItem.attachedFile = attachedFile;
        await setDoc(doc(db, "todo-items", item.id), todoItem);
      } else if (attachedFile) {
        // If there is an attached file, upload it to storage
        const uploadPath = `items/${item.id}/${attachedFile.name}`;
        const storageRef = ref(storage, uploadPath);

        const uploadTask = uploadBytesResumable(storageRef, attachedFile);

        // Wait for the upload to complete
        await uploadTask;

        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        //console.log(downloadURL);

        // Update the document in Firestore with the download URL
        await setDoc(doc(db, "todo-items", item.id), {
          ...todoItem,
          attachedFile: downloadURL,
        });
      }

      setIsPending(false);
      router.push("/");
    } catch (err) {

      setError(err.message);
    }

    //addDocument(todoItem, attachedFile);
  };

  return (
    <div
      className={`${styles.new} bg-gray-900 flex items-center justify-center relative`}
    >
      <div className="max-w-md w-full p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Post Content Section */}
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Title:
            </label>
            <input
              required
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 text-gray-200 bg-gray-700"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Description:
            </label>
            <textarea
              required
              id="description"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              rows={6}
              className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"
              placeholder="Add description"
            ></textarea>
          </div>
          {/* File Attachment Section */}
          <div className="mb-6">
            <label
              htmlFor="fileAttachment"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Attach File:
            </label>
            <div className="relative border-2 rounded-md px-4 py-3 bg-gray-700 flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out">
              <input
                type="file"
                id="fileAttachment"
                name="fileAttachment"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-gray-200"
              />
              <div className="flex items-center">
                {!attachedFile && (
                  <>
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                    <span className="ml-2 text-sm text-gray-300">
                      Choose a file
                    </span>
                  </>
                )}

                {attachedFile && (
                  <>
                    <span className="ml-2 text-sm text-gray-300">
                      Chosen file:{" "}
                      {attachedFile.name ? attachedFile.name : "file selected"}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="deadline_box"
              type="checkbox"
              checked={hasDeadline}
              onChange={(e) => setHasDeadline(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="deadline_box"
              className="ms-2 text-sm font-medium text-gray-200"
            >
              Has deadline
            </label>
          </div>

          <div className="mb-6">
            <label
              htmlFor="deadline"
              className="block text-gray-200 text-sm font-bold mb-2"
            >
              Deadline:
            </label>
            <DatePicker
              id="deadline"
              selected={selectedDate}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="Pp"
              className="text-gray-200 w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              id="public"
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="public"
              className="ms-2 text-sm font-medium text-gray-200"
            >
              Public
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            {!isPending && (
              <button
                type="submit"
                className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
              >
                Add todo item
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  id="send"
                  fill="#fff"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                </svg>
              </button>
            )}

            {isPending && error!='' && (
              <button
                disabled
                className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
              >
                {/* Loading animation for submission in progress */}
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </button>
            )}
            {
              error && <h1>{error}</h1>
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Todo;
