import React, { useState, useEffect } from 'react';

const RecentApplicants = () => {
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetch('/api/applicants')
            .then(response => response.json())
            .then(data => setApplicants(data));
    }, []);

    return (
        <div className="bg-white p-6 rounded shadow mb-8">
            <h2 className="text-2xl font-bold text-green-600">Recent Applicants</h2>
            <ul>
                {applicants.map((item, index) => (
                    <li key={index} className="mb-4">
                        <div className="flex items-center space-x-2">
                            <img src={item.avatar} alt="Applicant Avatar" className="rounded-full w-10 h-10 mr-2"/>
                            <span className="text-gray-700">{item.name}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecentApplicants;