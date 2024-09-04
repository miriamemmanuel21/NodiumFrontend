import React from 'react';

const ServiceProvider = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Service Provider Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Orders</h2>
                    <p>Manage your orders here.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Services</h2>
                    <p>Manage your services here.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Earnings</h2>
                    <p>Track your earnings here.</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceProvider;