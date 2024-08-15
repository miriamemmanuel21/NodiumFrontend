import React from 'react';
import lady from "../../assets/lady.png"
import man from "../../assets/man.png"
import Logo from "../../assets/Logo.png"

const GuidesSection = () => {
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '36px', margin: 0 }}>Guides to help you grow</h2>
                <a href="#" style={{ fontSize: '16px', color: '#000', textDecoration: 'none' }}>
                    See more
                </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div style={{ flex: '1', textAlign: 'center' }}>
                    <img
                        src={lady}
                        alt="Get A Remote Job"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                    />
                    <p style={{ marginTop: '10px', fontSize: '18px' }}>Start a side business</p>
                </div>
                <div style={{ flex: '1', textAlign: 'center', margin: '0 20px' }}>
                    <img
                        src={man}
                        alt="Ecommerce business ideas"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                    />
                    <p style={{ marginTop: '10px', fontSize: '18px' }}>Ecommerce business ideas</p>
                </div>
                <div style={{ flex: '1', textAlign: 'center' }}>
                    <img
                        src={Logo}
                        alt="Start an online business and work from home"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                    />
                    <p style={{ marginTop: '10px', fontSize: '18px' }}>
                        Get  an online Job and work from home
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GuidesSection;
