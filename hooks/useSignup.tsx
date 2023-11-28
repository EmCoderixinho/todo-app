import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { useRouter } from "next/router";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);
  const router = useRouter();

  const signup = async (email, password, fullName) => {
    setError(null);
    setIsPending(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
         // console.log("User created:", userCredential);

          dispatch({ type: "LOGIN", payload: userCredential.user });

          const db = getFirestore();

          setDoc(doc(db, "users", userCredential.user.uid), {
            email,
            fullName,
          });

          //console.log("Document created in Firestore");

          if (!isCancelled) {
            setError(null);
            setIsPending(false);
            router.push("/");
          }
        }
      );
    } catch (err) {
      console.error("Error during signup:", err);

      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};
