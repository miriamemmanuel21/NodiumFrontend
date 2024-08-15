import React from 'react';
import './ServiceCategory.css';
import website from "../../assets/website.png"
import seo from "../../assets/seo.png"
import Design from "../../assets/Design.png"
import Architecture from "../../assets/Architecture.png"
import socialMedia from "../../assets/socialMedia.png"
import voiceover from "../../assets/voiceover.png"

const ServiceCategoryList = () => {
    const services = [
        { title: 'Website Development', image:website },
        { title: 'Logo Design', image: Design },
        { title: 'SEO', image: seo },
        { title: 'Architecture & Interior Design', image: Architecture},
        { title: 'Social Media Marketing', image: socialMedia },
        { title: 'Voice Over', image: voiceover},
    ];

    return (
        <div className="ServiceCategoryList">
            <h2>Popular services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.image} alt={service.title} className="service-image"/>
                        <h3 className="service-title">{service.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCategoryList;