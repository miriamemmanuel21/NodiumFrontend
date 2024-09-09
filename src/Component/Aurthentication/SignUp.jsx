import React, { useState, useEffect } from 'react';
import ServiceProvider from '../DashBoard/ServiceProvider';
import Customer from '../DashBoard/Customer';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        'first-name': '',
        'last-name': '',
        username: '',
        email: '',
        password: '',
        role: ''
    });
    const [userRole, setUserRole] = useState('');
    const [error, setError] = useState('');
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Fetch CSRF token from the server
        const fetchCsrfToken = async () => {
            try {
                const response = await fetch('https://example.com/api/csrf-token');
                const data = await response.json();
                setCsrfToken(data.csrfToken);
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        };

        fetchCsrfToken();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const validatePassword = (password) => {
        const strongPasswordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
        return strongPasswordPattern.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUserRole(formData.role);

        // Client-side password validation
        if (!validatePassword(formData.password)) {
            setError('Password must be at least 8 characters long and include a number and a special character.');
            return;
        }

        // Example form submission logic
        try {
            const response = await fetch('https://example.com/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken // Include CSRF token in the headers
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                setError('Form submission failed: ' + response.statusText);
            }
        } catch (error) {
            setError('Error submitting form: ' + error.message);
        }
    };

    if (userRole === 'Service Provider') {
        return <ServiceProvider />;
    } else if (userRole === 'Customer') {
        return <Customer />;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            value={formData['first-name']}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your first name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            value={formData['last-name']}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your last name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData['username']}
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
                    <div>
                        <select
                            name='role'
                            id={'select'}
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className=" mb-10 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value={''} disabled>Select what you are signing up as</option>
                            <option value={'Service Provider'}>Service Provider</option>
                            <option value={'Customer'}>Customer</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="w-full bg-[#1dbf73] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#17a864] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;