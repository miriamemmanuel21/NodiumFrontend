import React, { useState, useEffect } from 'react';

const OTPPage = ({ onBackToLogin }) => {
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(60);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [timer]);

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp }),
            });

            const data = await response.json();

            if (data.success) {
                console.log("OTP verified successfully");
                // Proceed to the next step
            } else {
                setError('Invalid OTP. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-8">Enter OTP</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                            OTP
                        </label>
                        <input
                            type="text"
                            id="otp"
                            name="otp"
                            value={otp}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter OTP"
                            required
                        />
                    </div>
                    <div className="mb-4 text-center text-gray-700">
                        {timer > 0 ? `Resend OTP in ${timer} seconds` : 'You can now resend OTP'}
                    </div>
                    {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-[#1dbf73] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#17a864] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <button
                        onClick={onBackToLogin}
                        className="text-blue-500 hover:underline focus:outline-none"
                        style={{ color: '#1dbf73' }}
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
};

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [rememberMe, setRememberMe] = useState(false);
    const [showOtpPage, setShowOtpPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckboxChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const encryptedPassword = btoa(formData.password); // Simple Base64 encryption
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, password: encryptedPassword, rememberMe }),
            });

            const data = await response.json();

            if (data.success) {
                setShowOtpPage(true);
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleForgotPassword = () => {
        setShowOtpPage(true);
    };

    const handleBackToLogin = () => {
        setShowOtpPage(false);
    };

    if (showOtpPage) {
        return <OTPPage onBackToLogin={handleBackToLogin} />;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={rememberMe}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            Remember Me
                        </label>
                    </div>
                    {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-[#1dbf73] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#17a864] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <button
                        onClick={handleForgotPassword}
                        className="text-blue-500 hover:underline focus:outline-none"
                        style={{ color: '#1dbf73' }}
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;