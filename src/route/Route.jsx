import Layout from "../layout/Layout";
import SignUp from "../Component/Aurthentication/SignUp";
import Login from "../Component/Aurthentication/Login";
import AboutUs from "../Component/AboutUs/aboutus";
// import ProfileCard from "../Component/Profile/ProfileCard";
import Profile from "../Component/Profile/ProviderProfile";
import CustomerSupport from "../Component/CustomerSupport/CustomerSurport";
import WebDashboard from "../Component/WebDashboard/WebDeveloper";
import Marketing from "../Component/Marketing/Marketing"
export const Route = [

    {
        path:"/",
        element:<Layout/>,
        children:[
            // {
            //     path: "/signup",
            //     element: <SignUp/>
            // }
        ]
    },
    {
        path: "/signup",
        element: <SignUp/>

    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/aboutUs",
        element: <AboutUs/>
     },
    // {
    //     path: "/service",
    //     element: <ServiceDashboard />
    // },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/webdeveloper",
        element: <WebDashboard/>
    },
    {
        path: "/marketing",
        element: <Marketing/>
    },
    
    {
        path: "/customerSupport",
        element: <CustomerSupport/>
    }


]