import Layout from "../components/dashboardLayout";
import ProviderNavbar from "../components/navbar";
import ApplicationOverview from "./application_overview";
import styles from '../../index.module.css'
export default function ProviderDashboard(){

    return (
        <div className={`flex flex-col`}>
            <ProviderNavbar/>
            <div className={`${styles.current}`}>
                <div className={`flex md:hidden`}>
                </div>
            </div>
            <div className={`hidden md:flex-col ${styles.background}`}>
                <Layout props={0}/>
                <ApplicationOverview/>
            </div>
</div>
    )
}