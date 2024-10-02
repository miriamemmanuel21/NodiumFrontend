import styles from "../../index.module.css";
import ProviderNavbar from "./navbar";
import {Icon} from "@iconify/react";
import Layout from "./dashboardLayout";
import {useState} from 'react';

export default function Template({component, index}) {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className={`${styles.background}`}>
            <ProviderNavbar/>
            <div>
                {!isOpen ?
                    <section>
                        <div onClick={() => {
                            setOpen(!isOpen)
                        }} className={`bg-gray-200 md:hidden ${styles.slideOut}`}>
                            <Icon icon="heroicons:arrow-right-solid" width="6rem" height="2rem"
                                  style={{color: 'black'}}/>
                        </div>
                        <section className={`${styles.background}`}>
                            {component}
                        </section>
                    </section>
                    :
                    <div>
                        <div onClick={() => {
                            setOpen(!isOpen)
                        }} className={`bg-gray-200 md:hidden  ${styles.slideIn}`}>
                            <Icon icon="heroicons:arrow-left-solid" width="6rem" height="2rem"
                                  style={{color: 'black'}}/>
                        </div>
                        <Layout props={index}/>
                    </div>
                }
            </div>
        </div>

    )
}