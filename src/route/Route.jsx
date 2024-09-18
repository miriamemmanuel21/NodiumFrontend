import Layout from "../layout/Layout";
import SignUp from "../Component/Aurthentication/SignUp";
import Login from "../Component/Aurthentication/Login";
import AboutUs from "../Component/AboutUs/aboutus";
import Profile from "../Component/Profile/ProviderProfile";
import CustomerSupport from "../Component/CustomerSupport/CustomerSurport";
import WebDashboard from "../Component/WebDashboard/WebDeveloper";
import Marketing from "../Component/Marketing/Marketing";
import Hero from '../provider_components/components/ProviderHero';
import CustomerDashboard from "../Component/DashBoard/CustomerDashboard";
import CompanyProfile from "../Component/DashBoard/CompanyProfile";
import Invalids from "../provider_components/forbidden_pages";
export const Route = [

    {
        path:"/",
        element:<Layout/>,
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
    },
    {
        path:'/provider_navbar',
        element:<Hero/>
    }
    ,
    {
        path: '/customer_dashboard',
        element: <CustomerDashboard/>
    }
    ,
    {
        path: '/company_profile',
        element: <CompanyProfile/>
    }
    ,
    {
    path: '*',
    element: <Invalids/>
    }
]