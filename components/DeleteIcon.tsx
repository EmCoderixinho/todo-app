import { useFirestore } from "../hooks/useFirestore";

export default function DeleteIcon({ id }) {
  const { deleteDocument, response } = useFirestore("todo-items");

  const handleClick = () => {
    // Display a confirmation prompt
    //const isConfirmed = window.confirm(
      //"Are you sure you want to delete this post?"
    //);

    // If the user confirms, proceed with deletion
    //if (isConfirmed) {
      deleteDocument(id);
    //}
  };

  return (
    <button onClick={handleClick}>
      <svg
        className="h-8 w-8 text-red-500 cursor-pointer hover:text-red-700"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginRight: "5px" }}
      >
        <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
        <line x1="18" y1="9" x2="12" y2="15" />
        <line x1="12" y1="9" x2="18" y2="15" />
      </svg>
    </button>
  );
}
