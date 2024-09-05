import React from 'react';
import { FaChartLine, FaEnvelope, FaStar, FaClipboardList, FaCogs, FaMoneyBillWave, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ServiceProvider = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navigation Bar */}
            <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Service Provider Dashboard</div>
                <div className="space-x-4">
                    <a href="#" className="hover:underline px-2 py-1 rounded transition duration-300 ease-in-out hover:bg-gray-700">Dashboard</a>
                    <a href="#" className="hover:underline px-2 py-1 rounded transition duration-300 ease-in-out hover:bg-gray-700">Orders</a>
                    <a href="#" className="hover:underline px-2 py-1 rounded transition duration-300 ease-in-out hover:bg-gray-700">Services</a>
                    <a href="#" className="hover:underline px-2 py-1 rounded transition duration-300 ease-in-out hover:bg-gray-700">Earnings</a>
                </div>
            </nav>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="bg-gray-200 w-64 p-4 h-full">
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:underline">Dashboard</a></li>
                        <li><a href="#" className="hover:underline">Orders</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Earnings</a></li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-8">
                    {/* Hero Section */}
                    <section className="bg-cover bg-center h-64 flex flex-col justify-center items-center text-white"
                             style={{position: 'relative'}}>
                        <video
                            src="https://sg.fiverrcdn.com/packages_lp/cover_video.mp4"
                            poster="//assetsv2.fiverrcdn.com/assets/v2_photos/packages-lp/bg-first-hero-d92a52e389008a9c36e1cb59634ae244.jpg"
                            autoPlay
                            loop
                            muted
                            preload="auto"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '600px', // Set the desired width
                                height: '1080px', // Set the desired height
                                opacity: 1,
                            }}
                        >
                            <source src="https://sg.fiverrcdn.com/packages_lp/cover_video.mp4" type="video/mp4"/>
                            <source src="https://sg.fiverrcdn.com/packages_lp/cover_video.webm" type="video/webm"/>
                            <source src="https://sg.fiverrcdn.com/packages_lp/cover_video.ogv" type="video/ogv"/>
                        </video>
                        <div style={{position: 'relative', zIndex: 1}}>
                            <h1 className="text-5xl font-extrabold mb-2">Start Selling Your Services</h1>
                            <p className="text-xl mb-4">Join our community of talented freelancers</p>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                                Start Selling
                            </button>
                        </div>
                    </section>


                    {/* Promotional Section */}
                    <section className="mt-8 bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Promotional Content</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <img src="https://via.placeholder.com/300x200" alt="Promotion 1"
                                     className="w-full h-auto rounded-lg mb-4"/>
                                <p className="text-gray-700">Check out our new features and offers!</p>
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/300x200" alt="Promotion 2"
                                     className="w-full h-auto rounded-lg mb-4"/>
                                <p className="text-gray-700">Boost your sales with our premium services.</p>
                            </div>
                        </div>
                    </section>

                    {/* Freelancer Section */}
                    <section className="mb-12 mt-8">
                        <h2 className="text-3xl font-bold mb-6">Meet Our Talented Freelancers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="text-center">
                            <img src="https://via.placeholder.com/150" alt="Freelancer 1" className="mx-auto rounded-full mb-2" />
                                <p className="font-semibold">John Doe</p>
                                <p className="text-gray-600">Web Developer</p>
                            </div>
                            <div className="text-center">
                                <img src="https://via.placeholder.com/150" alt="Freelancer 2" className="mx-auto rounded-full mb-2" />
                                <p className="font-semibold">Jane Smith</p>
                                <p className="text-gray-600">Graphic Designer</p>
                            </div>
                            <div className="text-center">
                                <img src="https://via.placeholder.com/150" alt="Freelancer 3" className="mx-auto rounded-full mb-2" />
                                <p className="font-semibold">Alex Johnson</p>
                                <p className="text-gray-600">Software Engineer</p>
                            </div>
                            <div className="text-center">
                                <img src="https://via.placeholder.com/150" alt="Freelancer 4" className="mx-auto rounded-full mb-2" />
                                <p className="font-semibold">Mary Jane</p>
                                <p className="text-gray-600">Digital Marketer</p>
                            </div>
                            <div className="text-center">
                                <img src="https://via.placeholder.com/150" alt="Freelancer 5" className="mx-auto rounded-full mb-2" />
                                <p className="font-semibold">Michael Brown</p>
                                <p className="text-gray-600">Content Writer</p>
                            </div>
                            <div className="text-center">
                                <img src="https://via.placeholder.com/150" alt="Freelancer 6" className="mx-auto rounded-full mb-2" />
                                <p className="font-semibold">Sarah Wilson</p>
                                <p className="text-gray-600">SEO Specialist</p>
                            </div>
                        </div>
                    </section>

                    {/* Testimonial Section */}
                    <section className="mb-12 mt-8 bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="text-center">
                                <img src="https://via.placeholder.com/150" alt="Client 1" className="mx-auto rounded-full mb-2" />
                                <p className="font-semibold">Client 1</p>
                                <p className="text-gray-600">"Amazing service, highly recommend!"</p>
                            </div>
                            <div className="text-center">
                                <img src="https://via.placeholder.com/150" alt="Client 2" className="mx-auto rounded-full mb-2" />
                                <p className="font-semibold">Client 2</p>
                                <p className="text-gray-600">"Professional and reliable."</p>
                            </div>
                            <div className="text-center">
                                <img src="https://via.placeholder.com/150" alt="Client 3" className="mx-auto rounded-full mb-2" />
                                <p className="font-semibold">Client 3</p>
                                <p className="text-gray-600">"Exceeded my expectations!"</p>
                            </div>
                        </div>
                    </section>

                    {/* Existing Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaClipboardList className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Orders</h2>
                            </div>
                            <p>Manage your orders here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaCogs className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Services</h2>
                            </div>
                            <p>Manage your services here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaMoneyBillWave className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Earnings</h2>
                            </div>
                            <p>Track your earnings here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaChartLine className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Analytics</h2>
                            </div>
                            <p>View your analytics here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaEnvelope className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Messages</h2>
                            </div>
                            <p>Check your messages here.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center mb-4">
                                <FaStar className="text-2xl mr-2" />
                                <h2 className="text-2xl font-bold">Reviews</h2>
                            </div>
                            <p>Read your reviews here.</p>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white p-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between mb-8">
                        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                            <h5 className="text-lg font-bold mb-2">Categories</h5>
                            <ul>
                                <li><a href="#" className="hover:underline">Graphics & Design</a></li>
                                <li><a href="#" className="hover:underline">Digital Marketing</a></li>
                                <li><a href="#" className="hover:underline">Writing & Translation</a></li>
                                <li><a href="#" className="hover:underline">Video & Animation</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                            <h5 className="text-lg font-bold mb-2">About</h5>
                            <ul>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Press & News</a></li>
                                <li><a href="#" className="hover:underline">Partnerships</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                            <h5 className="text-lg font-bold mb-2">Support</h5>
                            <ul>
                                <li><a href="#" className="hover:underline">Help & Support</a></li>
                                <li><a href="#" className="hover:underline">Trust & Safety</a></li>
                                <li><a href="#" className="hover:underline">Selling on Fiverr</a></li>
                                <li><a href="#" className="hover:underline">Buying on Fiverr</a></li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
                            <h5 className="text-lg font-bold mb-2">Community</h5>
                            <ul>
                                <li><a href="#" className="hover:underline">Events</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                                <li><a href="#" className="hover:underline">Forum</a></li>
                                <li><a href="#" className="hover:underline">Affiliates</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center border-t border-gray-700 pt-4">
                        <div className="text-center md:text-left">
                            <a href="#" className="hover:underline mx-2">Terms</a>
                            <a href="#" className="hover:underline mx-2">Privacy Policy</a>
                            <a href="#" className="hover:underline mx-2">Contact</a>
                        </div>
                        <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
                            <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
                            <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
                            <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
                            <a href="#" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ServiceProvider;