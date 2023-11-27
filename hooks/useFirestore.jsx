import { useEffect, useReducer, useState } from "react";
import { db, storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, deleteDoc, addDoc, collection, setDoc } from "firebase/firestore";
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
        //console.log(document.attachedFile);

        const uploadPath = `items/${res.id}/${attachedFile.name}`;
        const storageRef = ref(storage, uploadPath);

        const uploadTask = uploadBytesResumable(storageRef, attachedFile);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            //console.log("Upload is " + progress + "% done");
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              //console.log("File available at", downloadURL);
              document.attachedFile = downloadURL;
              setDoc(doc(db, coll, res.id), document);
            });
          }
        );
      }

      console.log(res);

      if (!res) {
        throw new Error("Could not complete item upload");
      }

      dispatchIfNotCanceled({ type: "ADD_DOCUMENT", payload: document });
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
