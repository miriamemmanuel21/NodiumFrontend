import React, { useState, useEffect } from 'react';

export default function RecentNotifications() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = '';

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch notifications');
                }

                const data = await response.json();
                setNotifications(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, [url]);

    return (
        <div className={'bg-white flex flex-col md:mx-[5%] rounded-lg transition-transform hover:scale-105'}>
            <p className={`text-center font-bold text-2xl p-[10px]`}>Recent Notifications</p>
            <p>
                {notifications.length > 0 ? (
                    notifications.map(({ image, content, time }, index) => (
                        <div key={index} className="notification">
                            {image && <img src={image} alt="Notification" />}
                            <p>{content}</p>
                            <span>{time}</span>
                        </div>
                    ))
                ) : (
                    <p className={'text-center text-lg '}>No notifications available.</p>
                )}
            </p>

        </div>
    );
}
