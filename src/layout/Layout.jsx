import Navbar from "../Component/NavBar";
import Footer from "../Component/Footer";
import {Outlet} from "react-router-dom";

const  Layout = ()=> {
    return(
     <>
        <Navbar/>
         <Outlet/>
         <Footer/>
     </>
    )
}
export default  Layout;