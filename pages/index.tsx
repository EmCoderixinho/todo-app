import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import TodoList from "../components/TodoList";

export default function Home() {
  const router = useRouter();
  const { user } = useAuthContext();

  if (!user) {
    router.push("/login");

    return null;
  }

  const handleClick = () => {
    //console.log(documents);
  };
  //authisready==false pokazi loading
  // u ovom divu dobavi dokumente i ispisi ih
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${styles.home}`}>
      <TodoList />
    </div>
  );
}
