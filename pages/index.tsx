import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";

import styles from "../styles/Home.module.css";
import TodoList from "../components/TodoList";

export default function Home() {
  const router = useRouter();
  const { user } = useAuthContext();

  if (!user) {
    router.push("/login");

    return null;
  }

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${styles.home}`}>
      <TodoList />
    </div>
  );
}
