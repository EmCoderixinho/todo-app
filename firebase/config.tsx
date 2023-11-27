import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC2Bb7NdvdwrzBGxrQwDVpscrOJtsyhmLc",
  authDomain: "todo-4753b.firebaseapp.com",
  projectId: "todo-4753b",
  storageBucket: "todo-4753b.appspot.com",
  messagingSenderId: "342921846184",
  appId: "1:342921846184:web:ecd1a60022de25b0b3119d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize auth
const auth = getAuth(app);

//initialize db
const db = getFirestore(app);

//initialize  storage
const storage = getStorage(app);

export { auth, db, storage };
