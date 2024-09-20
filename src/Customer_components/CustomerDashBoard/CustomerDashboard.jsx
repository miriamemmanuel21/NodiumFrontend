import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ApplicationsOverview from './ApplicationOverview';
import ProfileView from './ProfileView';
import RecentNotification from './RecentNotification';
import RecentApplicants from './RecentApplicants';

const CustomerDashboard = () => (
    <div className="flex flex-col h-screen">
        <Header />
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

export default CustomerDashboard;