import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";

import styles from "../styles/Home.module.css";
import TodoList from "../components/TodoList";

export default function Home() {
  const router = useRouter();
  const { user } = useAuthContext();

  // Redirect to login page if user is not authenticated
  if (!user) {
    router.push("/login");
    return null; // Render nothing if user is not authenticated
  }

  // Render the home page if user is authenticated
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${styles.home}`}>
      {/* Display the TodoList component */}
      <TodoList />
    </div>
  );
}
