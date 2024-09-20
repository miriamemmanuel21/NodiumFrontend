import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";

const Header = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch('/api/user')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    return (
        <header className="bg-white p-4 flex justify-between items-center shadow w-full md:w-auto">
            <div className="flex items-center space-x-2">
                <img src="https://placehold.co/40x40" alt="Nodium Logo" className="mr-2"/>
                <span className="text-2xl font-bold text-green-600">Nodium</span>
            </div>
            <nav className="flex space-x-4">
                {[
                    {label: 'Home'},
                    {label: 'Browse Jobs'},
                    {label: 'Employers'},
                    {label: 'Candidates'},
                    {label: 'Pages'},
                    {label: 'Contact'},
                ].map((item, index) => (
                    <a key={index} href="#" className="text-gray-700 hover:text-green-600">
                        {item.label}
                    </a>
                ))}
            </nav>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full"/>
                    <span className="text-gray-700">Google.Com</span>
                </div>
                <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Add a Job</button>
            </div>
        </header>
    );
};

export default Header;