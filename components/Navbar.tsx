import styles from "../styles/Navbar.module.css";
import Link from "next/link";

import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { query, collection, where, getDocs } from "firebase/firestore";

const Navbar = () => {
  const { logout } = useLogout();
  const context = useAuthContext();

  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState("");

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    //console.log(isNavOpen);

    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let q;
        if (context.user) {
          if (!context.user.email) return;

          q = query(
            collection(db, "users"),
            where("email", "==", context.user.email)
          );
          const snapshot = await getDocs(q);

          //console.log(snapshot);

          let results = snapshot.docs.map((doc) => {
            const data = doc.data() as { [key: string]: any };

            return { ...data, id: doc.id };
          });

          setDocuments(results);

          setError(null);
        }
      } catch (error) {
        console.error(error);
        setError("Could not fetch the data");
      }
    };

    fetchData();
  }, [context]);

  return (
    <>
      <nav
        className={`bg-white border-gray-200 dark:bg-gray-900 ${styles.navbar}`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <Link href={"/"}>To-do</Link>
          </span>
          <Link
              href="/public"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Public todos
            </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen == true ? "true" : "false"}
            onClick={toggleNav} // Handle the toggle behavior
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:flex md:w-auto ${
              isNavOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {!context.user && ( //check if user is not logged in we give him option to log in or sign up if he does not have an account
                <>
                  <li>
                    <Link
                      href="/login"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/register"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
              {context.user &&
                documents[0] && ( //check if user is logged in and if he is we give him an option to log out dodaj hello user.fullName
                  <>
                    <li>
                      <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Hello {documents[0] ? documents[0].fullName : ""}
                      </p>
                    </li>
                    <li>
                      <Link
                        href="/new"
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Add task
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={logout}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Log out
                      </button>
                    </li>
                  </>
                )}

              {error && (
                <li>
                  <h2 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    {error}
                  </h2>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
