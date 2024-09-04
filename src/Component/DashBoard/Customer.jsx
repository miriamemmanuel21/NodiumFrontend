import React from 'react';

const Customer = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Customer Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Active Orders</h2>
                    <p>View your active orders here.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Order History</h2>
                    <p>View your order history here.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-2">Profile</h2>
                    <p>Manage your profile here.</p>
                </div>
            </div>
        </div>
    );
};

export default Customer;