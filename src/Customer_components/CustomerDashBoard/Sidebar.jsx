import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";

const Sidebar = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('/api/menu')
            .then(response => response.json())
            .then(data => setMenuItems(data));
    }, []);

    return (
        <div className="bg-white w-64 h-full p-6 flex flex-col md:w-1/4">
            <nav>
                <ul>
                    {menuItems.map((item, index) => (
                        <div key={index}
                             className="bg-white p-4 rounded shadow mb-4 hover:bg-gray-100 hover:shadow-lg transition-transform">
                            <li className="mb-4">
                                <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
                                    <i className={`fas fa-${item.icon} mr-2`}/>
                                    {item.label}
                                </a>
                            </li>
                        </div>
                    ))}
                </ul>
            </nav>
            <div style={{marginTop: 'auto', marginBottom: '20px'}}>
                <div className="bg-white p-4 rounded shadow mb-4 hover:bg-gray-100 hover:shadow-lg transition-transform">
                    <li className="mb-4">
                        <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
                            <i className="fas fa-calendar-alt mr-2"/>
                            Meeting
                        </a>
                    </li>
                </div>
                <div className="mt-auto">
                    <img src="https://placehold.co/100x100" alt="Illustration" className="mb-4"/>
                    <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;