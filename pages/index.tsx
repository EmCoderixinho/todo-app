import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const { user } = useAuthContext();

  if(!user){

    router.push('/login')
    console.log(user);
    
    return null;
  }

  const handleClick = () => {
    //console.log(documents);
  };

  if (!user) {
    router.push("/login");
    return null;
  }
  //authisready==false pokazi loading
  return (
    <div>
      
    
    </div>
  );
}
