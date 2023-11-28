import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

import styles from "../styles/new.module.css"

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [hasDeadline, setHasDeadline] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuthContext();
  const [attachedFile, setAttachedFile] = useState(null);
  const { addDocument, response } = useFirestore("todo-items");

  const router = useRouter();

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

  const handleSubmit = (e) => {
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
    };

    console.log(todoItem);

    addDocument(todoItem, attachedFile);
  };

  useEffect(() => {
    if (response.succes) {
      //router.push('/');
    }
  }, [response.succes]);

  if (!user) {
    router.push("/login");
    return null;
  }
  //authisready==false pokazi loading
  return (
    <div className={`${styles.new} dark:bg-gray-900 dark:border-gray-700 bg-gray-100 flex items-center justify-center relative`}>
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-md">
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
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Add title"
              className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"
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
              id="description"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              rows={4}
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
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
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
                      Chosen file: {attachedFile.name}
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
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="deadline_box"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
              className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              id="public"
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="public"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Public
            </label>
          </div>
          {/* Submit Button and Character Limit Section */}
          <div className="flex items-center justify-between">
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
          </div>
        </form>
      </div>
    </div>
  );
}
