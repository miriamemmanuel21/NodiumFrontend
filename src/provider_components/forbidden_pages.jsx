import React from 'react';
import {useNavigate } from 'react-router-dom';
import styles from '../index.module.css';

export default function Invalids() {
    const navigate = useNavigate();
    const returnHome=()=>{
        const role= localStorage.getItem('role');
        console.log(role)
        role==="PROVIDER"? navigate('/provider_dashboard') : navigate('/web_developer');
    }
    return (
        <div className={`bg-black justify-center items-center flex ${styles.invalid} `}>
            <button onClick={returnHome}
                    className={'text-xl p-[10px] md:text-2xl font-bold text-green-600 bg-white md:p-[30px] rounded-3xl hover:bg-gray-200'}>
                Return Back To Dashboard
            </button>
        </div>
    );
}

