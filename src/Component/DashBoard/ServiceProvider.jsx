import React from "react";  

    const serviceProviders = [  
        {  
            id: 1,  
            name: "John Doe",  
            service: "Software Developer",  
            rating: 4.5,  
            image: "https://via.placeholder.com/150",  
        },  
        {  
            id: 2,  
            name: "Jane Smith",  
            service: "Graphic Designer",  
            rating: 4.7,  
            image: "https://via.placeholder.com/150",  
        },  
        {  
            id: 3,  
            name: "Alice Johnson",  
            service: "Web Developer",  
            rating: 4.8,  
            image: "https://via.placeholder.com/150",  
        },  
        {  
            id: 4,  
            name: "Bob Brown",  
            service: "SEO Specialist",  
            rating: 4.6,  
            image: "https://via.placeholder.com/150",  
        },  
    ];  

    const ServiceProviderDashboard = () => {  
        return (  
            <div className="container mx-auto p-4">  
                <h1 className="text-2xl font-bold mb-4">Service Provider Dashboard</h1>  
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
                    {serviceProviders.map((provider) => (  
                        <div key={provider.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">  
                            <img src={provider.image} alt={provider.name} className="w-32 h-32 rounded-full mb-4" />  
                            <h2 className="text-xl font-semibold">{provider.name}</h2>  
                            <p className="text-gray-600">{provider.service}</p>  
                            <p className="text-yellow-500">Rating: {provider.rating} ★</p>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        );  
    };  

    export default ServiceProviderDashboard;  
