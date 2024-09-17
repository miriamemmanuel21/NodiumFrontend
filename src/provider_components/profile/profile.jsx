import Switch from "../components/Switch";
import Dashboard from "../../Component/DashBoard/Customer";
import {toast} from "react-toastify";
import {useState} from "react";

export default function ProviderProfile() {
    const [image, setImage] = useState(null);
    try{
        const response = async ()=>{
            await fetch('', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }).json()
        }
       setImage(response.image) ;
    }
    catch(err){
        toast('Unable to fetch image', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        })
    }

    const MyDetails= ()=>{
        let imageLinks= image
        return (
            <div>
                <img  src={imageLinks}/>
                <div>

                </div>
            </div>
        )
    }
    const Component=()=>{
        return (
            <div>
                <ul className={'flex gap-4'}>
                    <li className={'list-none text-bold hover:bg-gray-200 p-[10px] rounded-md'}>My Details</li>
                    <li className={'list-none text-bold hover:bg-gray-200 p-[10px] rounded-md'}>Social links</li>
                    <li className={'list-none text-bold hover:bg-gray-200 p-[10px] rounded-md'}>Contact Information</li>
                </ul>

            </div>
        )
    }
    return (
       <Switch component1={<Component/>} component2={<Dashboard/>}/>
    )
}