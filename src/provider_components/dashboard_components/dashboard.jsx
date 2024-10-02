import Layout from "../components/dashboardLayout";
import ProviderNavbar from "../components/navbar";
import ApplicationOverview from "./application_overview";
import styles from '../../index.module.css'
import Hamburger from "hamburger-react";
import {useState} from "react";
import RecentNotifications from "./recentNotifications";
export default function ProviderDashboard(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={`flex flex-col ${styles.slideIn} h-[100vw] md:h-0`}>
            <ProviderNavbar/>
            <div className={`${styles.current}`}>
                <div className={`flex flex-col md:hidden`}>
                    <div className={`flex `}>
                        <Hamburger toggle={()=>setMenuOpen(!menuOpen)} toggled={menuOpen}/>
                        <p className={`flex justify-center items-center px-[5px]`}>Side bar</p>
                    </div>
                    {
                        menuOpen?
                            <div className={`flex flex-col ${menuOpen?styles.slideIn :styles.slideOut}`}>
                                <Layout props={0}/>
                            </div>
                    :
                    <div className={'flex flex-col justify-center items-center gap-[20px] mt-[10px]' +
                        'md:ml-[150px] mb-[65vw]  md:mb-0'}>
                        <ApplicationOverview/>
                        <RecentNotifications/>
                    </div>
                    }
                </div>
            </div>
            <div className={`hidden md:flex ${styles.background}`}>
                <div>
                    <Layout props={0}/>
                </div>
                <div className={`flex flex-col ml-[5%] gap-[20px] mt-[10px]`}>
                    <ApplicationOverview/>
                    <div className={`md:ml-[30px]`}>
                        <RecentNotifications/>
                    </div>
                </div>
            </div>
</div>
    )
}
