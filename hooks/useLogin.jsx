import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false); //flag if user leaves the page
  const [error, setError] = useState(null); //flag if we have an error
  const [isPending, setIsPending] = useState(false); //flag if we are getting the data from database
  const { dispatch } = useAuthContext(); //function to update auth context

  const login = async (email, password) => {// login function which logs user in with email and password provided
    setError(null);
    setIsPending(true);//we are now getting the data so pending is true

    try {
      await signInWithEmailAndPassword(auth, email, password).then( //try to sign in with email and password to the firebase
        (userCredential) => {
          if (!isCancelled)
            if (userCredential.user) { //if we did sign in then update userContext and pending is now false
              dispatch({ type: "LOGIN", payload: userCredential.user });
              setIsPending(false);
              setError(null);
            } else throw new Error("Could not log in");
        }
      );
    } catch (err) {
      if (!isCancelled) {
        if (err.code === "auth/internal-error") //if login credentials are invalid output error to user
          setError("Invalid login credentials");
        else setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error };
};
