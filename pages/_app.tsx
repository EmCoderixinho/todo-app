import "../styles/globals.css";
import Layout from "../components/Layout";
import { AuthContextProvider } from "../context/AuthContext";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  //wrapping the whole application with AuthContextProvider sso we have the AuthContext globally in out app
  //we use layout so every page has the same look

  useEffect(() => {
    document.body.classList.add("dark:bg-gray-900");
    document.body.classList.add("bg-gray-100");
  }, []);

  return (
    <AuthContextProvider> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
