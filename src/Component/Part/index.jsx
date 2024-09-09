import React from 'react';

const Part = () => {
    return (
        <div style={{ backgroundColor: 'green', color: 'white', textAlign: 'center', padding: '20px', marginTop: '50px' }}>
            <h2 style={{ margin: 0, fontSize: '24px' }}>
                Freelance services at your <span style={{ color: '#f57c42' }}>fingertips!</span>
            </h2>
            <button
                style={{
                    marginTop: '15px',
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    color: '#4b0d23',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Join Nodium
            </button>
        </div>
    );
};

export default Part;
