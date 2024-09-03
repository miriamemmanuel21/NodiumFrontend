import React from 'react';
import './index.css';
function PopularServices() {
    const services = [
        { title: 'Website Development', icon: '💻', color: 'green' },
        { title: 'Logo Design', icon: '🎨', color: 'orange' },
        { title: 'SEO', icon: '🔍', color: 'red' },
        { title: 'Architecture & Interior Design', icon: '🏠', color: 'pink' },
        { title: 'Social Media Marketing', icon: '📱', color: 'yellow' },
        { title: 'Voice Over', icon: '🎤', color: 'lightgreen' },
        { title: 'Software Development', icon: ''}
    ];

    return (
        <div className="popular-services">
            <h2>Popular services</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <div key={index} className="service" style={{backgroundColor: service.color}}>
                        <span className="icon">{service.icon}</span>
                        <span className="title">{service.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularServices;
