import React, { useState, useEffect } from 'react';

const CompanyProfile = () => (
    <div className="flex flex-col h-screen">
        <div className="fixed w-full top-0 left-0 z-10">
            <Header />
        </div>
        <div className="flex flex-grow overflow-hidden mt-16">
            <Sidebar />
            <main className="flex-grow p-6 overflow-auto">
                <CompanyDetails />
                <SocialLinks />
                <Member />

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
            <img src="https://placehold.co/40x40" alt="JobPath Logo" className="mr-2"/>
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
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">Logout</button>
        </div>
    </header>
);

const CompanyDetails = () => (
    <main className="flex-1 p-8">
        <div className="bg-white p-8 rounded shadow">
            <div className="mb-8">
                <div className="flex items-center mb-4">
                    <img src="https://placehold.co/80x80" alt="Company Logo" className="mr-4"/>
                    <button className="bg-green-600 text-white py-2 px-4 rounded">Upload New Photo</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700">Employer Name</label>
                        <input type="text" className="w-full border rounded p-2" placeholder="Full Name"/>
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full border rounded p-2" placeholder="jobpath@gmail.com"/>
                    </div>
                    <div>
                        <label className="block text-gray-700">Phone</label>
                        <input type="text" className="w-full border rounded p-2" placeholder="+880171234567"/>
                    </div>
                    <div>
                        <label className="block text-gray-700">Website</label>
                        <input type="text" className="w-full border rounded p-2" placeholder="jobpath.com"/>
                    </div>
                    <div>
                        <label className="block text-gray-700">Founded Date</label>
                        <input type="text" className="w-full border rounded p-2" placeholder="DD/MM/YY"/>
                    </div>
                    <div>
                        <label className="block text-gray-700">Company Size</label>
                        <input type="text" className="w-full border rounded p-2" placeholder=" 10-20"/>
                    </div>
                    <div>
                        <label className="block text-gray-700">Company Categories</label>
                        <select className="w-full border rounded p-2">
                            <option>Design & Development</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700">Public For Profile View</label>
                        <select className="w-full border rounded p-2">
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700">Profile Url</label>
                        <input type="text" className="w-full border rounded p-2"
                               placeholder="https://jobpath.com/wp-demo/jobpath/employer/employer/"/>
                    </div>
                </div>
                <button className="bg-green-600 text-white py-2 px-4 rounded mt-4 mx-auto block">Save</button>

            </div>
        </div>
    </main>
);

const SocialLinks = () => (
    <main className="mb-8">
        <div className="bg-white p-8 rounded shadow">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-650 mb-4">Social Links</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-650">Facebook</label>
                        <input type="text" className="w-full border rounded p-2"
                               placeholder="WWW.facebook.com/nodium"/>
                    </div>
                    <div>
                        <label className="block text-gray-650">Linkedin</label>
                        <input type="text" className="w-full border rounded p-2"
                               placeholder="WWW.Linkedin.com/nodium"/>
                    </div>
                    <div>
                        <label className="block text-gray-650">Behance</label>
                        <input type="text" className="w-full border rounded p-2" placeholder="WWW.behance.com/jobpath"/>
                    </div>
                    <div>
                        <label className="block text-gray-650">Dribbble</label>
                        <input type="text" className="w-full border rounded p-2"
                               placeholder="WWW.dribbble.com/nodium"/>
                    </div>
                </div>
                <button className="bg-gray-200 text-gray-650 py-2 px-4 rounded mt-4">Add Another Network</button>
            </div>
        </div>
    </main>
);

const Member = () => (
    <main className="mb-8">
        <div className="bg-white p-8 rounded shadow">
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Member</h2>
                <div className="space-y-4">
                    <div className="bg-gray-100 p-4 rounded">
                        <input type="text" className="w-full border rounded p-2"
                               placeholder="memeber 1"/>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                        <input type="text" className="w-full border rounded p-2"
                               placeholder="member 2"/>
                    </div>
                </div>
                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded mt-4">Add another Member</button>
            </div>
            <div className="bg-gray-100 p-4 rounded">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Member</h2>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <label htmlFor="memberTitle" className="mr-2">Member Title</label>
                        <input type="text" id="memberTitle" className="w-full border rounded p-2" placeholder="Member Title" />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="designation" className="mr-2">Designation</label>
                        <input type="text" id="designation" className="w-full border rounded p-2" placeholder="Designation" />
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="experience" className="mr-2">Experience</label>
                        <select id="experience" className="w-full border rounded p-2">
                            <option value="1 Year">1 Year</option>
                            <option value="2 Years">2 Years</option>
                            {/* Add other options as needed */}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="facebook" className="block text-gray-700 font-bold mb-2">Facebook</label>
                        <input type="text" id="facebook" className="w-full border rounded p-2" placeholder="WWW.facebook.com/jobpath" />
                    </div>
                    <div>
                        <label htmlFor="linkedin" className="block text-gray-700 font-bold mb-2">Linkedin</label>
                        <input type="text" id="linkedin" className="w-full border rounded p-2" placeholder="WWW.Linkedin.com/jobpath" />
                    </div>
                    <div>
                        <label htmlFor="behance" className="block text-gray-700 font-bold mb-2">Behance</label>
                        <input type="text" id="behance" className="w-full border rounded p-2" placeholder="WWW.behance.com/jobpath" />
                    </div>
                    <div>
                        <label htmlFor="dribbble" className="block text-gray-700 font-bold mb-2">Dribbble</label>
                        <input type="text" id="dribbble" className="w-full border rounded p-2" placeholder="WWW.dribbble.com/jobpath" />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                        <textarea id="description" className="w-full border rounded p-2" placeholder="Description" />
                    </div>
                </div>
                <button className="bg-red-500 text-white py-2 px-4 rounded mt-4">Remove Member</button>
            </div>
        </div>
    </main>
);

export default CompanyProfile;