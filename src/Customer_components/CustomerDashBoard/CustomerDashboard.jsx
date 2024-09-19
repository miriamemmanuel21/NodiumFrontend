import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CustomerDashboard = () => (
    <div className="flex flex-col h-screen">
        <div className="fixed w-full top-0 left-0 z-10">
            <Header />
        </div>
        <div className="flex flex-grow overflow-hidden mt-16">
            <Sidebar />
            <main className="flex-grow p-6 overflow-auto">
                <ApplicationsOverview />
                <div className="flex space-x-4">
                    <ProfileView />
                    <RecentNotification />
                </div>
                <RecentApplicants />
            </main>
        </div>
    </div>
);

const Sidebar = () => (
    <div className="bg-white w-64 h-full p-6 flex flex-col">
        <nav>
            <ul>
                {[
                    {label: 'Dashboard', icon: 'tachometer-alt'},
                    {label: 'Company Profile', icon: 'user'},
                    {label: 'My Job', icon: 'briefcase'},
                    {label: 'Submit Job', icon: 'upload'},
                    {label: 'Candidate List', icon: 'list'},
                    {label: 'Candidate Shortlist', icon: 'check-square'},
                    {label: 'Message', icon: 'envelope'},
                    {label: 'Candidate Alerts', icon: 'bell'},
                    {label: 'Meeting', icon: 'calendar-alt'},
                    {label: 'Package', icon: 'box'},
                    {label: 'Change Password', icon: 'key'},
                    {label: 'Delete Profile', icon: 'trash'},
                ].map((item, index) => (
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

const Header = () => (
    <header className="bg-white p-4 flex justify-between items-center shadow w-full">
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
                <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full" />
                <span className="text-gray-700">Google.Com</span>
            </div>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Add a Job</button>
        </div>
    </header>
);

const ApplicationsOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
            { label: 'Job Posted', value: 20 },
            { label: 'Application', value: 30 },
            { label: 'Views', value: 700 },
            { label: 'Review', value: 100 },
        ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
                <div className="text-2xl font-bold text-green-600">{item.value}+</div>
                <div className="text-gray-700">{item.label}</div>
            </div>
        ))}
    </div>
);

const ProfileView = () => {
    const [selectedView, setSelectedView] = useState('');
    let chartInstance = null;

    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');
        if (chartInstance) {
            chartInstance.destroy();
        }
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                datasets: [{
                    label: 'Profile View',
                    data: [0,100, 200, 300, 400, 500, 800, 700, 800, 1000],
                    borderColor: 'green',
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    fill: true,
                    tension: 0.45,
                    cubicInterpolationMode: 'natural',
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 100
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function(context) {
                                return `Views: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });
    }, []);

    const handleButtonClick = (view) => {
        setSelectedView(view);
    };

    return (
        <div className="bg-white p-6 rounded shadow mb-8" style={{ width: '762px', height: '661px' }}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-700">Profile View</h2>
                <div className="flex space-x-2">
                    {[
                        { label: 'Weekly', value: 'weekly' },
                        { label: 'Monthly', value: 'monthly' },
                        { label: 'Yearly', value: 'yearly' },
                    ].map((item, index) => (
                        <button
                            key={index}
                            className={`py-1 px-3 rounded ${selectedView === item.value ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-green-700`}
                            onClick={() => handleButtonClick(item.value)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
            <canvas id="myChart" />
        </div>
    );
};

const RecentNotification = () => (
    <div className="bg-white p-6 rounded shadow mb-8" style={{ width: '484px', height: '661px' }}>
        <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Notification</h2>
        <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded flex items-center">
                <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-4" />
                <div>
                    <p className="text-gray-700">A meeting is canceled on your job <span className="font-bold">Software Engineer position</span> by Michael Roy.</p>
                    <p className="text-gray-500 text-sm">2 hours ago</p>
                </div>
            </div>
            <div className="bg-gray-50 p-4 rounded flex items-center">
                <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-4" />
                <div>
                    <p className="text-gray-700">A meeting is canceled on your job <span className="font-bold">Senior UI designer</span> by Jonathon Doe.</p>
                    <p className="text-gray-500 text-sm">2 hours ago</p>
                </div>
            </div>
            <div className="bg-gray-50 p-4 rounded flex items-center">
                <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-4" />
                <div>
                    <p className="text-gray-700">A meeting is canceled on your job <span className="font-bold">Senior UX designer</span> by Jack Alexander.</p>
                    <p className="text-gray-500 text-sm">2 hours ago</p>
                </div>
            </div>
        </div>
    </div>
);

const RecentApplicants = () => (
    <div className="bg-white p-6 rounded shadow" style={{ width: '1350px', height: '576px' }}>
        <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Applicants</h2>
        <div className="space-y-4">
            <div className="flex items-center justify-between" style={{ width: '1350px', height: '152px' }}>
                <div className="flex items-center">
                    <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-4" />
                    <div>
                        <p className="text-gray-700 font-bold">Mark Anthony</p>
                        <p className="text-gray-500">UX Designer</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-500">1 Year Ago</span>
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded">Approved</span>
                    <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300">Create meeting</button>
                    <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300">Download CV</button>
                    <button className="bg-white-200 text-white-600 py-4 px-3 rounded hover:bg-red-400"><i className="fas fa-trash"></i></button>
                </div>
            </div>
            <div className="flex items-center justify-between" style={{ width: '1350px', height: '152px' }}>
                <div className="flex items-center">
                    <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-4" />
                    <div>
                        <p className="text-gray-700 font-bold">Jonathon</p>
                        <p className="text-gray-500">Web Designer</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-500">2 Month Ago</span>
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded">Approved</span>
                    <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300">Create meeting</button>
                    <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300">Download CV</button>
                    <button className="bg-white-200 text-white-600 py-4 px-3 rounded hover:bg-red-400"><i className="fas fa-trash bg-red"></i></button>
                </div>
            </div>
            <div className="flex items-center justify-between" style={{ width: '1350px', height: '152px' }}>
                <div className="flex items-center">
                    <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full mr-4" />
                    <div>
                        <p className="text-gray-700 font-bold">Jack Smith</p>
                        <p className="text-gray-500">Soft Engineer</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-500">6 Month Ago</span>
                    <span className="bg-green-100 text-green-600 py-1 px-3 rounded">Approved</span>
                    <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300">Create meeting</button>
                    <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded hover:bg-gray-300">Download CV</button>
                    <button className="bg-white-200 text-white-600 py-4 px-3 rounded hover:bg-red-400"><i className="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    </div>
);

export default CustomerDashboard;