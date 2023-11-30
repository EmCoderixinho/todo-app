import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

import styles from "../styles/new.module.css";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [hasDeadline, setHasDeadline] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);
  const { addDocument, response } = useFirestore("todo-items");
  const [fileError, setFileError] = useState("");

  const { user } = useAuthContext();
  const router = useRouter();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleFileChange = (e) => {
    setAttachedFile(null);

    let selected = e.target.files[0];

    if (!selected) return;

    if (!selected.type.includes("image")) {
      setFileError("Please select an image");
      return;
    }

    setFileError("");
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
      done: false,
    };

    //console.log(todoItem);
    //console.log(user);

    addDocument(todoItem, attachedFile);

    ///router.push('/');
  };

  useEffect(() => {
    if (response.succes) {
      router.push("/");
    }
  }, [response.succes]);

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div
      className={`${styles.new} bg-gray-900 border-gray-700 flex items-center justify-center relative`}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-8 rounded-lg shadow-md"
      >
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
          {fileError !== "" && (
            <p className="ml-2 text-sm text-red-600 mt-2">{fileError}</p>
          )}
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
            className="ms-2 text-sm font-medium text-gray-200 dark:text-gray-300"
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
            className="ms-2 text-sm font-medium text-gray-200 dark:text-gray-300"
          >
            Public
          </label>
        </div>
        {/* Submit Button and Character Limit Section */}
        <div className="flex items-center justify-between">
          {response.isPending && (
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
          {!response.isPending && (
            <button
              type="submit"
              className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
            >
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
        </div>
        {response.error && (

          <p>{response.error}</p>
        )}
      </form>
    </div>
  );
}
