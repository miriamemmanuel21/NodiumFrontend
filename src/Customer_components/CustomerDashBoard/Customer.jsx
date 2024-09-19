
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();
  const firstname = 'Miriam';

  const services = [ 'WebDeveloper', 'Marketing', 'CustomerSupport','TechnicalWritter','MobileAppDeveloper','Cloud Engineer'];

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleGoClick = () => {
    if (selectedService === 'WebDeveloper') {
      navigate('/webdeveloper');
    } 
    if (selectedService === 'Marketing'){
        navigate('/Marketing');
    }
    if (selectedService === 'CustomerSupport'){
        navigate('/Customer Support');
    }
    else if (selectedService) {
      navigate(`/${selectedService.toLowerCase().replace(/\s+/g, '')}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-12 max-w-2xl text-center">
        <h1 className="text-7xl font-bold text-green-600 mb-8">Welcome, {firstname}!</h1>
        <h2 className="text-3xl mb-6">What service can we offer you today?</h2>

        <div className="mb-6">
          <select
            className="border border-gray-300 rounded-lg p-3 text-2xl w-full"
            value={selectedService}
            onChange={handleServiceChange}
          >
            <option value="" disabled>Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-green-600 text-white px-10 py-3 rounded-lg font-bold text-2xl hover:bg-green-500 transition"
          onClick={handleGoClick}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default Dashboard;