import React, { useState, useEffect } from 'react';

const RecentNotification = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetch('/api/notifications')
            .then(response => response.json())
            .then(data => setNotifications(data));
    }, []);

    return (
        <div className="bg-white p-6 rounded shadow mb-8 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold text-green-600">Recent Notifications</h2>
            <ul>
                {notifications.map((item, index) => (
                    <li key={index} className="mb-4">
                        <div className="flex items-center space-x-2">
                            <i className={`fas fa-${item.icon} mr-2`}/>
                            <span className="text-gray-700">{item.message}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentNotification;