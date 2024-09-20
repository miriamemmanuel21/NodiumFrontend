import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProfileView = () => {
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        fetch('/api/profile')
            .then(response => response.json())
            .then(data => setProfileData(data));
    }, []);

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
        <div className="bg-white p-6 rounded shadow mb-8 md:w-1/2 lg:w-2/3">
            <div className="flex justify -between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-700">Profile View</h2>
                <div className="flex space-x-2">
                    {[
                        {label: 'Weekly', value: 'weekly'},
                        {label: 'Monthly', value: 'monthly'},
                        {label: 'Yearly', value: 'yearly'},
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
            <canvas id="myChart"/>
        </div>
    );
};

export default ProfileView;