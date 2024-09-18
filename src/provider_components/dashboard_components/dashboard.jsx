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
        <div className={`flex flex-col `}>
            <ProviderNavbar/>
            <div className={`${styles.current}`}>
                <div className={`flex flex-col md:hidden pl-[4%]`}>
                    <Hamburger toggle={setMenuOpen} toggled={menuOpen}/>
                    {
                        menuOpen?
                            <div className={'flex flex-col'}>
                                <p className={'p-4 text-2xl'}>Application overview</p>
                                <Layout props={0}/>
                            </div>
                    :
                    <div className={'md:flex flex-col hidden'}>
                        <p className={'p-3 text-2xl'}>Application overview</p>
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
                <div>
                    <ApplicationOverview/>
                    <RecentNotifications/>
                </div>
            </div>
</div>
    )
}
