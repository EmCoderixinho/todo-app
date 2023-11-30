// Import necessary modules and components
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

// Define the Public component
export default function Public() {
  // Get user information from custom hook
  const { user } = useAuthContext();

  // Fetch public todo items using custom hook
  const { documents, error } = useCollection("todo-items", [
    "isPublic",
    "==",
    true,
  ]);

  // State variable to track loading state
  const [isPending, setIsPending] = useState(false);

  // Use effect to update loading state when documents change
  useEffect(() => {
    if (!documents) setIsPending(true);
    else setIsPending(false);
  }, [documents]);

  // Display loading spinner while fetching data
  if (isPending)
    return (
      <div className="flex items-center justify-center h-screen" role="status">
        {/* Loading spinner */}
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Loading spinner paths */}
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        {/* Loading text */}
        <span className="sr-only">Loading Page...</span>
      </div>
    );

  // Display todo items if available
  if (!isPending && documents && documents.length > 0)
    return (
      <div className={`flex flex-wrap justify-center gap-4 ${styles.home}`}>
        {/* Map through documents and display each todo item */}
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="max-w-md w-full rounded-lg border border-gray-200 bg-gray-800 shadow-md flex flex-col"
          >
            {/* Display todo item content */}
            <div className="flex flex-col p-5">
              <h5 className="text-2xl font-bold tracking-tight mb-2 text-gray-200">
                {doc.title}
              </h5>
              <p className="mb-3 flex-grow overflow-hidden text-gray-400">
                {doc.description}
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
            </div>
          </div>
        ))}
      </div>
    );

  // Display error message if fetching documents fails
  if (!isPending && error) <h1>{error}</h1>;

  // Display message if no public tasks are added
  return (
    <div className="max-w-md rounded-lg border border-gray-200 bg-gray-800 shadow-md flex flex-col text-white">
      <h1>No Public Tasks Added</h1>
    </div>
  );
}
