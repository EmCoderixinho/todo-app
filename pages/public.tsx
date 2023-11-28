import Link from "next/link";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

export default function Public() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("todo-items", [
    "isPublic",
    "==",
    true,
  ]);

  console.log(documents);
  

  return (
    documents &&
    documents.length > 0 && (
      <>
        {documents.map((doc) => {
          //console.log(doc.id);

          return (
            <div
              key={doc.id}
              className="max-w-md rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 flex flex-col"
            >
              <img className="rounded-t-lg" src="" alt="" />

              <div className="flex flex-col flex-grow p-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                  {doc.title}
                </h5>
                <p className="mb-3 flex-grow overflow-hidden text-gray-700 dark:text-gray-400">
                  {doc.description}
                </p>
              </div>
            </div>
          );
        })}
      </>
    )
  );
}
