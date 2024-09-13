import Layout from "./components/dashboardLayout";
import ProviderNavbar from "../provider_components/components/navbar";
import {useState} from "react";
import Hamburger from "hamburger-react";
import styles from '../index.module.css'
export default function ProviderDashboard(){
    const [isOpen, setOpen] = useState(false);
    const Rigth= ()=>{
        return (
        <div>

        </div>
        )
    }
    const Overlay = () => {
        return (
            <div
                className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md transition-opacity 
                duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            ></div>
        );
    };
    return (
        <div className={`flex flex-col`}>
            <ProviderNavbar/>
            <div className={`${styles.current}`}>
                <div className={`flex lg:hidden`}>
                    {isOpen && <Overlay/>}
                    {isOpen ?
                        <Hamburger toggle={setOpen} toggled={isOpen} onToggle={()=> setOpen(!isOpen)}/> :
                        <Layout/>
                    }
                </div>
            </div>
            <div className={'hidden lg:flex'}>
                <Layout props={0}/>
            </div>
        </div>
    )
}