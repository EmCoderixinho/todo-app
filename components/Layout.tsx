import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "./Navbar";

const Layout = ({children}) => {

    const {authIsReady} = useAuthContext() //checks is authentication has been done

    return(
        authIsReady && (// if the authentication has beed done it means we can load the page
        <>
            <Navbar></Navbar>
            {children}
        </>)
    )
     
}
 
export default Layout;