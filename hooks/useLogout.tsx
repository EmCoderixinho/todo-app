import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);//flag if user leaves the page
  const [error, setError] = useState(null);//flag if we have an error
  const [isPending, setIsPending] = useState(false);//flag if we are getting the data from database
  const { dispatch } = useAuthContext();//function to update auth context
 
  const logout = async () => {
    setError(null);
    setIsPending(false);

    try {  

        signOut(auth).then(() =>{

            dispatch({ type: "LOGOUT" });
        }).catch(error => {

            throw new Error('could not sign out');
        })

      if (!isCancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};