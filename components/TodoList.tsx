import Link from "next/link";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import OpenIcon from "./OpenIcon";
import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";

export default function TodoList() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("todo-items", [
    "uid",
    "==",
    user.uid ? user.uid : null,
  ]);
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
                  {doc.title.length > 100
                    ? `${doc.title.substring(0, 100)}...`
                    : doc.title}
                </h5>
                <p className="mb-3 flex-grow overflow-hidden text-gray-700 dark:text-gray-400">
                  {doc.description.length > 330
                    ? `${doc.description.substring(0, 330)}...`
                    : doc.description}
                </p>
                <div className="flex mt-auto space-x-2">
                  <OpenIcon id={doc.id} />
                  <EditIcon id={doc.id}/>
                  <DeleteIcon id={doc.id}/>
                </div>
              </div>
            </div>
          );
        })}
      </>
    )
  );
}
