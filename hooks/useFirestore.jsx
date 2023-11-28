import { useEffect, useReducer, useState } from "react";
import { db, storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, deleteDoc, addDoc, collection, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
let initalState = {
  document: null,
  isPending: false,
  error: null,
  succes: null,
};

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

export const useFirestore = (coll) => {
  const router = useRouter();
  const [response, dispatch] = useReducer(firestoreReducer, initalState);
  const [isCancelled, setIsCanceled] = useState(false);

  const dispatchIfNotCanceled = (action) => {
    if (!isCancelled) dispatch(action);
  };

  //add document
  const addDocument = async (document, attachedFile) => {
    dispatchIfNotCanceled({ type: "IS_PENDING" });

    try {

      let res = await addDoc(collection(db, coll), document);

      if (attachedFile) {
        // If there is an attached file, upload it to storage
        const uploadPath = `items/${docRef.id}/${attachedFile.name}`;
        const storageRef = ref(storage, uploadPath);
  
        const uploadTask = uploadBytesResumable(storageRef, attachedFile);
  
        // Wait for the upload to complete
        await uploadTask;
  
        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
        // Update the document in Firestore with the download URL
        await setDoc(doc(db, coll, docRef.id), {
          ...document,
          attachedFile: downloadURL,
        });
      }

      //console.log(res);

      if (!res) {
        throw new Error("Could not complete item upload");
      }

      dispatchIfNotCanceled({ type: "ADD_DOCUMENT", payload: document });
      router.push('/');
    } catch (err) {
      dispatchIfNotCanceled({ type: "ERROR", payload: err.message });
    }
  };

  //delete document
  const deleteDocument = async (id) => {
    dispatchIfNotCanceled({ type: "IS_PENDING" });

    try {
      await deleteDoc(doc(db, coll, id));
      dispatchIfNotCanceled({ type: "DELETE_DOCUMENT" });
    } catch (error) {
      dispatchIfNotCanceled({
        type: "ERROR",
        payload: "could not delete message",
      });
    }
  };

  useEffect(() => {
    return () => setIsCanceled(true);
  });

  return { addDocument, deleteDocument, response };
};
