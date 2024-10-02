import styles from '../../index.module.css';
import Layout from '../components/dashboardLayout';
import {useRef, useState} from "react";
import ProviderNavbar from "../components/navbar";
import MyDetails from "./my_details";
import {Icon} from "@iconify/react";
import SocialLinks from "./SocialLinks";
import ContactInformation from './contactInformation'
import Uploader from "../resume/my_resume";

export default function ProviderProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const myDetailsRef = useRef(null);
    const socialLinksRef = useRef(null);
    const contactInfoRef = useRef(null);
    const cvReaderRef = useRef(null);

    const handleScrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    const PageContents = () => {
        return <div className={`flex-1 px-1 md:h-screen overflow-y-auto ${styles.background}`}>
            <div className="flex gap-4 bg-white mt-[10px] p-2">
                <li className="text-sm list-none font-thin p-[10px] md:text-xl hover:bg-gray-300 rounded-2xl text-center cursor-pointer"
                    onClick={() => handleScrollToSection(myDetailsRef)}>
                    My Details
                </li>
                <li className="text-sm list-none font-thin p-[10px] md:text-xl hover:bg-gray-300
                                rounded-2xl text-center cursor-pointer"
                    onClick={() => handleScrollToSection(socialLinksRef)}>
                    Social Links
                </li>
                <li className="text-sm list-none font-thin p-[10px] md:text-xl hover:bg-gray-300
                 rounded-2xl text-center cursor-pointer"
                    onClick={() => handleScrollToSection(contactInfoRef)}>
                    Contact Information
                </li>
            </div>

            <div className="p-4 gap-5">
                <div ref={myDetailsRef} className="bg-white rounded-md shadow-sm mb-8 p-4 gap-1">
                    <div className={`bg-gray-100`}>
                        <p className="font-bold pl-[10px] py-[5px]">My Details</p>
                    </div>
                    <div className="py-1 h-[250px] md:h-auto overflow-y-auto">
                        <MyDetails/>
                    </div>
                </div>
                <div ref={socialLinksRef} className="bg-white rounded-md shadow-sm mb-8 p-4 gap-1">
                    <div className={`bg-gray-100`}>
                        <p className="font-bold pl-[10px] py-[5px]">Social Links</p>
                    </div>
                    <div className="py-1 md:h-auto overflow-y-auto">
                        <SocialLinks/>
                    </div>
                </div>
                <div ref={contactInfoRef} className="bg-white rounded-md shadow-sm mb-8 p-4 gap-1">
                    <div className={`bg-gray-100`}>
                        <p className="font-bold pl-[10px] py-[5px]">Contact Information</p>
                    </div>
                    <div className="overflow-y-auto ml-[30px] mt-[10px]">
                        <ContactInformation/>
                    </div>
                </div>
                <div ref={cvReaderRef} className="bg-white rounded-md shadow-sm mb-8 p-4 gap-1">
                    <div className={`bg-gray-100`}>
                        <p className="font-bold pl-[10px] py-[5px]">Curriculum Vitae</p>
                    </div>
                    <div className="overflow-y-auto">
                        <Uploader/>
                    </div>
                </div>
            </div>
        </div>;
    }

    return (
        <div className={`${styles.background}`}>
            <ProviderNavbar/>
            <div>
                {!isOpen ?
                    <section>
                        <div onClick={() => {
                            setIsOpen(!isOpen)
                        }} className={`bg-gray-200 md:hidden ${styles.slideOut}`}>
                            <Icon icon="heroicons:arrow-right-solid" width="6rem" height="2rem"
                                  style={{color: 'black'}}/>
                        </div>
                        <section className={`${styles.background} flex`}>
                            <div className={`hidden md:flex`}>
                                <Layout props={1}/>
                            </div>
                            <PageContents/>
                        </section>
                    </section>
                    :
                    <div className={`mt-[40px]`}>
                        <div onClick={() => {
                            setIsOpen(!isOpen)
                        }}
                             className={`bg-gray-200 md:hidden  ${styles.slideIn}`}>
                            <Icon icon="heroicons:arrow-left-solid" width="6rem" height="2rem"
                                  style={{color: 'black'}}/>
                        </div>
                        <Layout props={1}/>
                    </div>
                }
            </div>
        </div>

    );
}

