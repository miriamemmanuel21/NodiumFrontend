import React from "react";  

    const Marketing = [  
        {  
            id: 1,  
            name: "John Doe",  
            service: "Software Developer",  
            rating: 4.5,  
            experience: "3 yrs",  
            image: "https://via.placeholder.com/150",  
        },  
        {  
            id: 2,  
            name: "Jane Smith",  
            service: "Marketer",  
            rating: 4.7,  
            experience: "5 yrs",  
            image: "https://via.placeholder.com/150",  
        },  
        {  
            id: 3,  
            name: "Alice Johnson",  
            service: "Marketer",  
            rating: 4.8,  
            experience: "4 yrs",  
            image: "https://via.placeholder.com/150",  
        },  
        {  
            id: 4,  
            name: "Bob Brown",  
            service: "Marketer",  
            rating: 4.6,  
            experience: "2 yrs",  
            image: "https://via.placeholder.com/150",  
        },  
    ];  

    const ServiceProviderDashboard = () => {  
        return (  
            <div className="container mx-auto p-4">  
                <h1 className="text-2xl font-bold mb-4">Service Provider Dashboard</h1>  
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
                    {Marketing.map((provider) => (  
                        <div key={provider.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">  
                            <img src={provider.image} alt={provider.name} className="w-32 h-32 rounded-full mb-4" />  
                            <h2 className="text-xl font-semibold">{provider.name}</h2>  
                            <p className="text-gray-600">{provider.service}</p>  
                            <p className="text-yellow-500">Rating: {provider.rating} ★</p>  
                            <p className="text-gray-500">Experience: {provider.experience}</p>  
                        </div>  
                    ))}  
                </div>  
            </div>  
        );  
    };  

    export default ServiceProviderDashboard;  