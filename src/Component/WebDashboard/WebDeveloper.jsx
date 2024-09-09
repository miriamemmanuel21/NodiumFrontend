import React from "react";  
import ladyworking from "../../assets/ladyworking.png";  
import manworking from "../../assets/manworking.png";  
import lady2working from "../../assets/lady2working.png";  
// import manworking2 from "../../assets/manworking.png"; 
import joy from "../../assets/joy.png";
import victor from "../../assets/victor.png";
import bob from "../../assets/bob.png"

const WebDeveloper = [  
  {  
    id: 1,  
    name: "John Doe",  
    service: "Software Developer",  
    rating: 4.5,  
    experience: "3 yrs",  
    image: manworking,  
    link: "/profile/johndoe", // Example link
  },  
  {  
    id: 2,  
    name: "Jane Smith",  
    service: "Backend Engineer",  
    rating: 4.7,  
    experience: "5 yrs",  
    image: ladyworking,  
    link: "/profile/janesmith", // Example link
  },  
  {  
    id: 3,  
    name: "Alice Johnson",  
    service: "Web Developer",  
    rating: 4.8,  
    experience: "4 yrs",  
    image: lady2working,  
    link: "/profile/alicejohnson", // Example link
  },  
  {  
    id: 4,  
    name: "Bob Brown",  
    service: "Frontend Engineer",  
    rating: 4.6,  
    experience: "2 yrs",  
    image: bob,  
    link: "/profile/bobbrown", // Example link
  },  
  {  
    id: 4,  
    name: "Victor Emmanuel",  
    service: "UI UX Designer",  
    rating: 4.6,  
    experience: "1 yrs",  
    image: victor,  
    link: "/profile/bobbrown", // Example link
  },  
  {  
    id: 4,  
    name: "Joy Love",  
    service: "Figma Designer",  
    rating: 4.6,  
    experience: "2 yrs",  
    image: joy,  
    link: "/profile/bobbrown", // Example link
  },  
];  

const ServiceProviders = () => {  
  return (  
    <div className="container mx-auto p-4">  
      <h1 className="text-2xl font-bold mb-6">Service Provider Dashboard</h1>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
        {WebDeveloper.map((provider) => (  
          <a  
            key={provider.id}  
            href={provider.link} // Link to the provider's profile or other page
            className="bg-gray-200 shadow-lg rounded-lg p-12 flex flex-col items-center transition-transform transform hover:scale-105 w-full h-full"  
          >  
            <img src={provider.image} alt={provider.name} className="w-48 h-48 rounded-full mb-6" />  
            <h2 className="text-2xl font-semibold">{provider.name}</h2>  
            <p className="text-gray-600 text-lg">{provider.service}</p>  
            <p className="text-yellow-500 text-lg">Rating: {provider.rating} ★</p>  
            <p className="text-gray-500 text-lg">Experience: {provider.experience}</p>  
          </a>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default ServiceProviders;
