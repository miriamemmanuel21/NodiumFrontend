import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import styles from '../index.module.css';

function Invalids() {
    const navigate = useNavigate();
    return (
        <div className={`bg-black justify-center items-center flex ${styles.invalid} pt-[]lg:pt-[35vw]`}>
            <button onClick={() => { navigate('/provider-business') }} className={'text-xl p-[10px] md:text-4xl font-bold text-green-600 bg-white md:p-[30px] rounded-3xl hover:bg-gray-200'}>
                Return Back To Dashboard
            </button>
        </div>
    );
}

