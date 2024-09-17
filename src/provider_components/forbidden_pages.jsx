import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import styles from '../index.module.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/provider-business" element={<ProviderBusinessPage />} />
                <Route path="/invalids" element={<Invalids />} />
            </Routes>
        </Router>
    );
}

function Invalids() {
    const navigate = useNavigate();
    return (
        <div className={`bg-black justify-center items-center flex ${styles.invalid} pt-[]lg:pt-[35vw]`}>
            <button onClick={() => { navigate('/provider-business') }} className={'text-xl p-[10px] md:text-4xl font-bold text-green-600 bg-white md:p-[30px] rounded-3xl hover:bg-gray-200'}>
                Return Back To Dashboard
            </button>
        </div>
    );
}

function ProviderBusinessPage() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#f8f9fa' }}>
                <h1 style={{ fontSize: '24px' }}>Dashboard</h1>
                <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Logout
                </button>
            </header>
            <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <section style={{ width: '100%', maxWidth: '1200px', margin: '20px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                    <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Overview</h2>
                    <p style={{ fontSize: '16px', color: '#6c757d' }}>Welcome to your dashboard. Here you can manage your business details, see statistics, and much more.</p>
                </section>
                <section style={{ width: '100%', maxWidth: '1200px', margin: '20px 0', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
                    <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Statistics</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 200px', margin: '10px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '18px' }}>Total Sales</h3>
                            <p style={{ fontSize: '24px', color: '#28a745' }}>$12,000</p>
                        </div>
                        <div style={{ flex: '1 1 200px', margin: '10px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '18px' }}>New Customers</h3>
                            <p style={{ fontSize: '24px', color: '#17a2b8' }}>150</p>
                        </div>
                        <div style={{ flex: '1 1 200px', margin: '10px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '18px' }}>Pending Orders</h3>
                            <p style={{ fontSize: '24px', color: '#ffc107' }}>25</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa', marginTop: '20px' }}>
                <p style={{ fontSize: '14px', color: '#6c757d' }}>© 2023 Company Name. All rights reserved.</p>
            </footer>
            <style jsx>{`
                @media (max-width: 768px) {
                    header {
                        flex-direction: column;
                    }
                    main {
                        padding: 10px;
                    }
                    section {
                        width: 100%;
                    }
                }
                button:hover {
                    background-color: #0056b3;
                }
                a:hover {
                    color: #0056b3;
                }
            `}</style>
        </div>
    );
}