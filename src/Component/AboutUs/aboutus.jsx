import React from "react";
import Miriam from "../../assets/miriam.png";
import Abbey from "../../assets/abbey.png";
import David from "../../assets/David.png";
import Marvelous from "../../assets/Marvelous.png";

const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
                <p className="text-lg">
                    We are a leading company in our industry, committed to providing top-notch services and products to our customers. Our team of experts works tirelessly to ensure that we meet and exceed expectations.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg">
                    Our mission is to deliver exceptional value to our customers through innovative solutions and unparalleled service. We strive to create a positive impact in our community and the world.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg">
                    We envision a future where our company is recognized as a leader in sustainability and innovation, setting the standard for excellence in our industry.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-4 text-center">
                        <img src={Abbey} alt="Abiodun" className="rounded-full mb-2 h-40 w-40 object-cover" />
                        <h3 className="text-xl font-bold">Abiodun</h3>
                        <p className="text-gray-600">CEO</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 text-center">
                        <img src={Marvelous} alt="Marvelous" className="rounded-full mb-2 h-40 w-40 object-cover" />
                        <h3 className="text-xl font-bold">Marvelous</h3>
                        <p className="text-gray-600">CFO</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 text-center">
                        <img src={Miriam} alt="Miriam" className="rounded-full mb-2 h-40 w-40 object-cover" />
                        <h3 className="text-xl font-bold">Miriam</h3>
                        <p className="text-gray-600">CTO</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 text-center">
                        <img src={David} alt="David" className="rounded-full mb-2 h-40 w-40 object-cover" />
                        <h3 className="text-xl font-bold">David</h3>
                        <p className="text-gray-600">CFO</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;