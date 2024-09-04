import Layout from "../layout/Layout";
import SignUp from "../Component/Aurthentication/SignUp";
import Login from "../Component/Aurthentication/Login";

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
    }


]