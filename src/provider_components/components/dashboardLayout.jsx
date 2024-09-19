import {Icon} from '@iconify/react';
import styles from '../../index.module.css'
import {useNavigate} from "react-router-dom";
export default function Layout({props}){
    const Navigate = useNavigate();
    const count = props;
    const styles1 = `flex gap-5 pl-5 py-2 rounded-[10px] ml-4 ${styles.current}`;
    const styles2 =`flex gap-5 pl-5 py-2 rounded-[10px] ml-4 ${styles.tag}`;
    const contents = [
        [<Icon icon="iwwa:dashboard" width={30} height={30}  style={{color: 'black'}} />,'/provider_dashboard','Dashboard',0],
        [<Icon icon="streamline:user-profile-focus" width={30} height={30}  style={{color: 'black'}} />,'/provider_profile','Profile',1],
        [<Icon icon="fluent:notepad-person-24-regular" width={30} height={30}  style={{color: 'black'}} />,'/provider_resume','My Resume',2],
        [<Icon icon="fluent-emoji-high-contrast:man-construction-worker" width={30} height={30}  style={{color: 'black'}} />,'/applied_jobs','Applied Job',3],
        [<Icon icon="el:list-alt" width={30} height={30}  style={{color: 'black'}} />,'','Jobs Shortlist',4],
        [<Icon icon="hugeicons:message-edit-02" width={30} height={30}  style={{color: 'black'}} />,'','Message',5],
        [<Icon icon="fluent:mail-alert-28-regular" width={30} height={30}  style={{color: 'black'}} />,'','Job Alerts',6],
        [<Icon icon="clarity:employee-group-solid" width={30} height={30}  style={{color: 'black'}} />,'','Following Employer',7],
        [<Icon icon="guidance:meeting-point" width={30} height={30}  style={{color: 'black'}} />,'','Meeting',8],
        [<Icon icon="solar:lock-password-broken" width={30} height={30}  style={{color: 'black'}} />,'','Change Password',9],
        [<Icon icon="weui:delete-on-outlined" width={30} height={30}  style={{color: 'black'}} />,'','Delete Profile',10],


    ]
    return (
        <div className={'flex flex-col justify-between w-full lg:w-[30vw] bg-gray-50'}>
            <div className={'flex flex-col gap-3 w-[90%] pt-5'}>
                {
                    contents.map(([icon,link,text,index])=>(
                    <ul className={`${count=== index ? styles1 : styles2}`}
                    onClick={()=>Navigate(link)}>
                        <p>{icon}</p>
                        <p className={'text-lg font-thin pt-1'}>{text}</p>
                    </ul>
                    ))
                }
            </div>
            <div className={`flex gap-5 pl-5 mt-[10vw] py-2 rounded-[10px] ml-4 ${styles.tag}`}>
                <Icon icon="ri:logout-box-line" width={30} height={30}  style={{color: 'black'}} />
                <p className={'text-lg font-thin hover:text-red-600'}>Log out</p>
            </div>
        </div>
    )
}