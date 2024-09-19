import Layout from "../layout/Layout";
import SignUp from "../Component/Aurthentication/SignUp";
import Login from "../Component/Aurthentication/Login";
import AboutUs from "../Component/AboutUs/aboutus";
import Profile from "../Component/Profile/profile";
import CustomerSupport from "../Component/CustomerSupport/CustomerSurport";
import WebDashboard from "../Component/WebDashboard/WebDeveloper";
import Marketing from "../Component/Marketing/Marketing";
import Hero from '../provider_components/components/ProviderHero';
import CustomerDashboard from "../Customer_components/CustomerDashBoard/CustomerDashboard";
import CompanyProfile from "../Customer_components/CustomerDashBoard/CompanyProfile";
import Invalids from '../provider_components/forbidden_pages'
import ProviderDashboard from "../provider_components/dashboard_components/dashboard";
import ProviderProfile from "../provider_components/profile/provider_profile";
import Resume from "../provider_components/resume/my_resume";
import AppliedJobs from "../provider_components/applications/applications";
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
    },{
        path:'/provider_dashboard',
        element: <ProviderDashboard/>
    },
    {
        path:'/provider_profile',
        element: <ProviderProfile/>
    }
    ,
    {
        path: '/customer_dashboard',
        element: <CustomerDashboard/>
    },
    {
        path:'/provider_resume',
        element: <Resume/>
    },
    {
        path: '/applied_jobs',
        element: <AppliedJobs/>
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