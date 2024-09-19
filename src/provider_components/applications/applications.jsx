import Layout from '../components/dashboardLayout'
import ProviderNavbar from "../components/navbar";
import styles from '../../index.module.css'
import AppliedJobsContents from './applied_jobs';
export  default function AppliedJobs(){
    return (
        <div>
            <ProviderNavbar/>
            <div className={'flex flex-col md:flex-row '}>
                <div className={`h-screen overflow-y-auto`}>
                    <Layout props={3}/>
                </div>
                <div className={`p-[5%] ${styles.background} w-[100%]`}>
                    <AppliedJobsContents/>
                </div>
            </div>
        </div>
    )
}