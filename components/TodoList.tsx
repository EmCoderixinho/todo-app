import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import OpenIcon from "./OpenIcon";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";
import { useEffect, useState } from "react";

export default function TodoList() {
  // Get user information from the authentication context
  const { user } = useAuthContext();

  // Fetch todo items for the current user
  const { documents, error } = useCollection("todo-items", [
    "uid",
    "==",
    user.uid ? user.uid : null,
  ]);

  // State to track if data is pending
  const [isPending, setIsPending] = useState(false);

  // Effect to update the pending state based on document changes
  useEffect(() => {
    if (!documents) setIsPending(true);
    else setIsPending(false);
  }, [documents]);

  // If data is pending, show a loading spinner
  if (isPending)
    return (
      <div className="flex items-center justify-center h-screen" role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths for loading spinner */}
        </svg>
        <span className="sr-only">Loading Page...</span>
      </div>
    );

  // If there are documents and not pending, render the todo items
  if (!isPending && documents && documents.length > 0)
    return (
      <>
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="max-w-md w-full rounded-lg border border-gray-200 bg-gray-800 shadow-md flex flex-col"
          >
            <div className="flex flex-col flex-grow p-5">
              {/* Truncate and display title */}
              <h5 className="text-2xl font-bold tracking-tight mb-2 text-gray-200">
                {doc.title.length > 100
                  ? `${doc.title.substring(0, 100)}...`
                  : doc.title}
              </h5>

              {/* Truncate and display description */}
              <p className="mb-3 flex-grow overflow-hidden text-gray-400">
                {doc.description.length > 330
                  ? `${doc.description.substring(0, 330)}...`
                  : doc.description}
              </p>

              {/* Display attached file if available */}
              {doc.attachedFile && (
                <img
                  className="rounded-t-lg w-full h-40 object-contain mb-2"
                  src={doc.attachedFile}
                  alt=""
                />
              )}

              {/* Display deadline if available */}
              {doc.hasDeadline && doc.year && (
                <p className="text-gray-200">
                  Due to {doc.day}/{doc.month}/{doc.year} until{" "}
                  {doc.hours < 10 ? "0" + doc.hours : doc.hours}:
                  {doc.minutes < 10 ? "0" + doc.minutes : doc.minutes}
                </p>
              )}

              {/* Icons for open, edit, and delete actions */}
              <div className="flex mt-auto space-x-2">
                <OpenIcon id={doc.id} />
                <EditIcon id={doc.id} />
                <DeleteIcon id={doc.id} />
              </div>
            </div>
          </div>
        ))}
      </>
    );

  // If not pending and there is an error, display the error
  if (!isPending && error) return <h1>{error}</h1>;

  // If there are no tasks, display a message
  return (
    <div className="max-w-md rounded-lg border border-gray-200 bg-gray-800 shadow-md flex flex-col text-white">
      <h1>No Tasks Added</h1>
    </div>
  );
}
