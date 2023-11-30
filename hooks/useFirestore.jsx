import { useEffect, useReducer, useState } from "react";
import { db, storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, deleteDoc, addDoc, collection, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

// Initial state for the useReducer
let initalState = {
  document: null,
  isPending: false,
  error: null,
  succes: null,
};

// Reducer function for handling different actions
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { document: null, error: null, isPending: true, succes: false };

    case "ADD_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        succes: true,
        error: null,
      };

    case "DELETE_DOCUMENT":
      return {
        isPending: false,
        document: null,
        succes: true,
        error: null,
      };

    case "ERROR":
      return {
        isPending: false,
        error: action.payload,
        succes: false,
        document: null,
      };

    default:
      return state;
  }
};

// Custom hook for interacting with Firestore
export const useFirestore = (coll) => {
  const router = useRouter();

  // Initialize state using useReducer
  const [response, dispatch] = useReducer(firestoreReducer, initalState);

  // State to track if the component is unmounted
  const [isCancelled, setIsCanceled] = useState(false);

  // Helper function to dispatch actions if the component is not unmounted
  const dispatchIfNotCanceled = (action) => {
    if (!isCancelled) dispatch(action);
  };

  // Function to add a document to Firestore
  const addDocument = async (document, attachedFile) => {
    dispatchIfNotCanceled({ type: "IS_PENDING" });

    try {
      // Add the document to the Firestore collection
      let res = await addDoc(collection(db, coll), document);

      if (attachedFile) {
        // If there is an attached file, upload it to storage
        const uploadPath = `items/${res.id}/${attachedFile.name}`;
        const storageRef = ref(storage, uploadPath);
  
        const uploadTask = uploadBytesResumable(storageRef, attachedFile);
  
        // Wait for the upload to complete
        await uploadTask;
  
        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
        console.log(downloadURL);

        // Update the document in Firestore with the download URL
        await setDoc(doc(db, coll, res.id), {
          ...document,
          attachedFile: downloadURL,
        });
      }

      // If the document was added successfully, update state and navigate to '/'
      if (!res) {
        throw new Error("Could not complete item upload");
      }

      dispatchIfNotCanceled({ type: "ADD_DOCUMENT", payload: document });
      router.push('/');
    } catch (err) {
      dispatchIfNotCanceled({ type: "ERROR", payload: err.message });
    }
  };

  // Function to delete a document from Firestore
  const deleteDocument = async (id) => {
    dispatchIfNotCanceled({ type: "IS_PENDING" });

    try {
      // Delete the document from the Firestore collection
      await deleteDoc(doc(db, coll, id));
      dispatchIfNotCanceled({ type: "DELETE_DOCUMENT" });
    } catch (error) {
      dispatchIfNotCanceled({
        type: "ERROR",
        payload: "could not delete message",
      });
    }
  };

  // Cleanup effect to set isCancelled to true when the component unmounts
  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);

  // Return the functions and state for external use
  return { addDocument, deleteDocument, response };
};
