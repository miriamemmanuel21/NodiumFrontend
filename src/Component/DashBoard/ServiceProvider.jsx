import React from 'react';
import { FaChartLine, FaEnvelope, FaStar, FaClipboardList, FaCogs, FaMoneyBillWave, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import webDeveloperImage from '../../assets/webdeveloper.jpg';
import graphicDesignerImage from '../../assets/graphicdesigner.jpg';
import softwareEngineerImage from '../../assets/softwareengineer.jpg';
import digitalMarketerImage from '../../assets/digitalmarketer.jpg';
import contentWriterImage from '../../assets/contentwriter.jpg';
import sEOSpecialistImage from '../../assets/SEOspecialist.jpg';
import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.jpg';
import client3 from '../../assets/client3.jpg';
import promo1 from '../../assets/promo1.jpg';
import promo2 from '../../assets/promo2.jpg';

const ServiceProviderDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navigation Bar */}
            <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Service Provider Dashboard</div>
                <div className="space-x-4">
                    <a href="#" className="hover:underline px-2 py-1 rounded transition duration-300 ease-in-out hover:bg-gray-700">Dashboard</a>
                    <a href="#" className="hover:underline px-2 py-1 rounded transition duration-300 ease-in-out hover:bg-gray-700">Orders</a>
                    <a href="#" className="hover:underline px-2 py-1 rounded transition duration-300 ease-in-out hover:bg-gray-700">Services</a>
                    <a href="#" className="hover:underline px-2 py-1 rounded transition duration-300 ease-in-out hover:bg-gray-700">Earnings</a>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {/* Hero Section */}
                <section className="bg-cover bg-center h-[600px] flex flex-col justify-center items-center text-white"
                         style={{position: 'relative', zIndex: 0}}>
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
                            width: '100%',
                            minHeight: '580px',
                            opacity: 1,
                            objectFit: "cover",
                            overflowClipMargin: "content-box",
                            overflow: "clip",
                        }}
                    >
                        <source src="https://sg.fiverrcdn.com/packages_lp/cover_video.mp4" type="video/mp4"/>
                        <source src="https://sg.fiverrcdn.com/packages_lp/cover_video.webm" type="video/webm"/>
                        <source src="https://sg.fiverrcdn.com/packages_lp/cover_video.ogv" type="video/ogv"/>
                    </video>
                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 className="text-5xl font-extrabold mb-2">Start Selling Your Services</h1>
                        <p className="text-xl mb-4">Join our community of talented freelancers</p>
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out"
                            onClick={() => navigate('/Component/DashBoard/ProviderBusinessPage')}
                        >
                            Start Selling
                        </button>
                    </div>
                </section>

                {/* Dashboard Sections */}
                <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </section>

                {/* Promotional Section */}
                <section className="mt-8 bg-gray-100 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Promotional Content</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <img src={promo1} alt="Promotion 1"
                                 className="w-full h-auto rounded-lg mb-4"
                                 style={{ width: '100%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="text-gray-700">Check out our new features and offers!</p>
                        </div>
                        <div>
                            <img src={promo2} alt="Promotion 2"
                                 className="w-full h-auto rounded-lg mb-4"
                                 style={{ width: '100%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="text-gray-700">Boost your sales with our premium services.</p>
                        </div>
                    </div>
                </section>

                {/* Freelancer Section */}
                <section className="mb-12 mt-8">
                    <h2 className="text-3xl font-bold mb-6">Meet Our Talented Service Providers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center">
                            <img src={webDeveloperImage} alt="African Tech Guy 1" className="mx-auto rounded-full mb-2"
                                 style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="font-semibold">Dapo Johnson</p>
                            <p className="text-gray-600">I am a Web Developer</p>
                        </div>
                        <div className="text-center">
                            <img src={graphicDesignerImage} alt="African Tech Lady 1" className="mx-auto rounded-full mb-2"
                                 style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="font-semibold">Jane Smith</p>
                            <p className="text-gray-600">I am a Graphic Designer</p>
                        </div>
                        <div className="text-center">
                            <img src={softwareEngineerImage} alt="African Software Engineer 1" className="mx-auto rounded-full mb-2"
                                 style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="font-semibold">Alex Johnson</p>
                            <p className="text-gray-600">I am a Software Engineer</p>
                        </div>
                        <div className="text-center">
                            <img src={digitalMarketerImage} alt="African Tech Lady 2" className="mx-auto rounded-full mb-2"
                                 style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="font-semibold">Mary Jane</p>
                            <p className="text-gray-600">I am a Digital Marketer</p>
                        </div>
                        <div className="text-center">
                            <img src={contentWriterImage} alt="African Tech Guy 2" className="mx-auto rounded-full mb-2"
                                 style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="font-semibold">Sarah Wilson</p>
                            <p className="text-gray-600">I am a Content Writer</p>
                        </div>
                        <div className="text-center">
                            <img src={sEOSpecialistImage} alt="African Tech Lady 3" className="mx-auto rounded-full mb-2"
                                 style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="font-semibold">Michael Brown</p>
                            <p className="text-gray-600">I am a SEO Specialist</p>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="mb-12 mt-8 bg-gray-100 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center">
                            <img src={client1} alt="Client 1" className="mx-auto rounded-full mb-2"
                                 style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="font-semibold">Kolade Coker</p>
                            <p className="text-gray-600">"Amazing service, highly recommend!"</p>
                        </div>
                        <div className="text-center">
                            <img src={client2} alt="Client 2" className="mx-auto rounded-full mb-2"
                                 style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="font-semibold">Clara Bridgeton</p>
                            <p className="text-gray-600">"Professional and reliable."</p>
                        </div>
                        <div className="text-center">
                            <img src={client3} alt="Client 3" className="mx-auto rounded-full mb-2"
                                 style={{ width: '80%', height: 'auto', aspectRatio: '16/9', margin: '0 auto' }} />
                            <p className="font-semibold">Chibuzo Martins</p>
                            <p className="text-gray-600">"Exceeded my expectations!"</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-green-800 text-white p-10">
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
                                <li><a href="#" className="hover:underline">Selling on Nodium</a></li>
                                <li><a href="#" className="hover:underline">Buying on Nodium</a></li>
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

export default ServiceProviderDashboard;