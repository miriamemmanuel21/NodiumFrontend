import styles from '../../index.module.css';
import Layout from '../components/dashboardLayout';
import {useRef, useState} from "react";
import ProviderNavbar from "../components/navbar";
import Hamburger from "hamburger-react";
import MyDetails from "./my_details";


function GetElementsHeaders(handleScrollToSection, myDetailsRef, socialLinksRef, contactInfoRef) {
    return <ul className={`flex gap-4 bg-white`}>
        <li className={'text-sm list-none font-thin p-[10px] md:text-xl hover:bg-gray-300 rounded-2xl text-center'}
            onClick={() => handleScrollToSection(myDetailsRef)}>
            My Details
        </li>
        <li className={'text-sm list-none font-thin p-[10px] md:text-xl hover:bg-gray-300 rounded-2xl text-center'}
            onClick={() => handleScrollToSection(socialLinksRef)}>
            Social Links
        </li>
        <li className={'text-sm list-none font-thin p-[10px] md:text-xl hover:bg-gray-300 rounded-2xl text-center'}
            onClick={() => handleScrollToSection(contactInfoRef)}>
            Contact Information
        </li>
    </ul>;
}

export default function ProviderProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const myDetailsRef = useRef(null);
    const socialLinksRef = useRef(null);
    const contactInfoRef = useRef(null);

    const handleScrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${styles.background}`}>
            <ProviderNavbar/>
            <div className={'flex-col md:flex md:flex-row'}>

                <div className={'flex md:hidden gap-8'}>
                    <Hamburger className={`flex md:hidden`} toggle={setIsOpen} toggled={isOpen}/>
                    <p className={'text-lg font-bold pt-[6px]'}>Side bar</p>
                </div>

                <div className={`hidden md:flex md:flex-col gap-8`}>
                    <div className={`h-screen overflow-y-auto`}>
                        <Layout props={1}/>
                    </div>
                </div>

                {isOpen && (
                    <div className={`fixed top-0 left-0 z-20 w-full bg-white md:hidden`}>
                        <div className={`flex-col h-screen overflow-y-auto`}>
                            <ProviderNavbar/>
                            <div>
                                <p className={'text-sm font-thin pt-[6px]'}>Side bar</p>
                            </div>
                            <Layout props={1}/>
                        </div>
                    </div>
                )}

                <div className={`bg-white flex-1 px-6 ${styles.background}`}>
                    {GetElementsHeaders(handleScrollToSection, myDetailsRef, socialLinksRef, contactInfoRef)}
                    <div className={`md:p-[30px]`}>
                        <div ref={myDetailsRef} className={'py-5 bg-white'}>
                            <MyDetails/>
                        </div>
                        <div ref={socialLinksRef} className={'mb-8'}>
                        </div>
                        <div ref={contactInfoRef}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
