import { useEffect, useState, useRef } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useCollection = (coll, _query) => {
  
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const query1 = useRef(_query).current;

  useEffect(() => {

    let q;

    //console.log(query1);

    if(query1.length > 0 && query1[2]) q = query(collection(db, coll), where(query1[0], query1[1], query1[2]));
    else return;

    //console.log(q);

    const unsub = onSnapshot(q,
      (snapshot) => {

        //console.log(snapshot);
        let results = [];

        snapshot.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );

    return () => unsub();
  }, [coll, query1]);

  return { documents, error };
};