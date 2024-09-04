import React from 'react';

const FreelanceBenefits = () => {
    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>
                A whole world of freelance talent at your fingertips
            </h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left' }}>
                <div style={{ flex: '1', margin: '0 20px', borderRadius: '30%', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'opacity 0.3s', ':hover': { opacity: 0.5 } }}>
                    <div style={{ fontSize: '30px', marginBottom: '15px' }}>📊</div> {/* Icon Placeholder */}
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Over 700 categories</h3>
                    <p style={{ color: '#555', fontSize: '16px' }}>
                        Get results from skilled freelancers from all over the world, for every task, at any price point.
                    </p>
                </div>

                <div style={{ flex: '1', margin: '0 20px', borderRadius: '30%', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'opacity 0.3s', ':hover': { opacity: 0.5 } }}>
                    <div style={{ fontSize: '30px', marginBottom: '15px' }}>💼</div> {/* Icon Placeholder */}
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Clear, transparent pricing</h3>
                    <p style={{ color: '#555', fontSize: '16px' }}>
                        Pay per project or by the hour (Pro). Payments only get released when you approve.
                    </p>
                </div>

                <div style={{ flex: '1', margin: '0 20px', borderRadius: '30%', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'opacity 0.3s', ':hover': { opacity: 0.5 } }}>
                    <div style={{ fontSize: '30px', marginBottom: '15px' }}>⚡</div> {/* Icon Placeholder */}
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Quality work done faster</h3>
                    <p style={{ color: '#555', fontSize: '16px' }}>
                        Filter to find the right freelancers quickly and get great work delivered in no time, every time.
                    </p>
                </div>

                <div style={{ flex: '1', margin: '0 20px', borderRadius: '30%', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'opacity 0.3s', ':hover': { opacity: 0.5 } }}>
                    <div style={{ fontSize: '30px', marginBottom: '15px' }}>🌐</div> {/* Icon Placeholder */}
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>24/7 award-winning support</h3>
                    <p style={{ color: '#555', fontSize: '16px' }}>
                        Chat with our team to get your questions answered or resolve any issues with your orders.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FreelanceBenefits;