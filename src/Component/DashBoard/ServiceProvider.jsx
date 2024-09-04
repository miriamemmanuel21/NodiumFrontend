import React from 'react';
import { FaChartLine, FaEnvelope, FaStar, FaClipboardList, FaCogs, FaMoneyBillWave } from 'react-icons/fa';

const ServiceProvider = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navigation Bar */}
            <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Service Provider Dashboard</div>
                <div className="space-x-4">
                    <a href="#" className="hover:underline">Dashboard</a>
                    <a href="#" className="hover:underline">Orders</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Earnings</a>
                </div>
            </nav>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="bg-gray-200 w-64 p-4 h-full">
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:underline">Dashboard</a></li>
                        <li><a href="#" className="hover:underline">Orders</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Earnings</a></li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8">
                    <h1 className="text-4xl font-extrabold mb-6">Service Provider Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaClipboardList className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Orders</h2>
                            </div>
                            <p>Manage your orders here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaCogs className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Services</h2>
                            </div>
                            <p>Manage your services here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaMoneyBillWave className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Earnings</h2>
                            </div>
                            <p>Track your earnings here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaChartLine className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Analytics</h2>
                            </div>
                            <p>View your analytics here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaEnvelope className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Messages</h2>
                            </div>
                            <p>Check your messages here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaStar className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Reviews</h2>
                            </div>
                            <p>Read your reviews here.</p>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                <div className="space-x-4">
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </footer>
        </div>
    );
};

export default ServiceProvider;