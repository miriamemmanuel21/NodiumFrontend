import React from 'react';
import { FaHome, FaEnvelope, FaShoppingCart, FaUser, FaChartBar } from 'react-icons/fa';

const Customer = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white w-1/5 p-4 h-full">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <FaHome className="mr-2" /> Home
                    </li>
                    <li className="flex items-center">
                        <FaEnvelope className="mr-2" /> Messages
                    </li>
                    <li className="flex items-center">
                        <FaShoppingCart className="mr-2" /> Orders
                    </li>
                    <li className="flex items-center">
                        <FaUser className="mr-2" /> Profile
                    </li>
                    <li className="flex items-center">
                        <FaChartBar className="mr-2" /> Analytics
                    </li>
                </ul>
            </div>

            <div className="w-4/5 p-8">
                {/* Navigation Bar */}
                <nav className="bg-white shadow-md p-4 mb-8 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <a href="#" className="flex items-center text-gray-800">
                            <FaHome className="mr-2" /> Home
                        </a>
                        <a href="#" className="flex items-center text-gray-800">
                            <FaEnvelope className="mr-2" /> Messages
                        </a>
                        <a href="#" className="flex items-center text-gray-800">
                            <FaShoppingCart className="mr-2" /> Orders
                        </a>
                        <a href="#" className="flex items-center text-gray-800">
                            <FaUser className="mr-2" /> Profile
                        </a>
                        <a href="#" className="flex items-center text-gray-800">
                            <FaChartBar className="mr-2" /> Analytics
                        </a>
                    </div>
                </nav>

                {/* Main Content */}
                <h1 className="text-3xl font-bold mb-4">Customer Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-2 flex items-center">
                            <FaShoppingCart className="mr-2" /> Active Orders
                        </h2>
                        <p>View your active orders here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-2 flex items-center">
                            <FaChartBar className="mr-2" /> Order History
                        </h2>
                        <p>View your order history here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-2 flex items-center">
                            <FaUser className="mr-2" /> Profile
                        </h2>
                        <p>Manage your profile here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-2 flex items-center">
                            <FaEnvelope className="mr-2" /> Messages
                        </h2>
                        <p>Read and send messages here.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-2 flex items-center">
                            <FaChartBar className="mr-2" /> Analytics
                        </h2>
                        <p>View your analytics here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;