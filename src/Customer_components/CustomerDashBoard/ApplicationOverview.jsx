import React, { useState, useEffect } from 'react';

const ApplicationsOverview = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch('/api/applications')
            .then(response => response.json())
            .then(data => setApplications(data));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
                {label: 'Job Posted', value: 20},
                {label: 'Application', value: 30},
                {label: 'Views', value: 700},
                {label: 'Review', value: 100},
            ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded shadow">
                    <div className="text-2xl font-bold text-green-600">{item.value}+</div>
                    <div className="text-gray-700">{item.label}</div>
                </div>
            ))}
        </div>
    );
};

export default ApplicationsOverview;