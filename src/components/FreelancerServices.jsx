import React from "react";
import three_d from '../assets/features_icons/3D.png';
import logo from '../assets/features_icons/logo.png';
import website from '../assets/features_icons/website.png';
import marketing from '../assets/features_icons/marketing.png';
import press from '../assets/features_icons/press.png';
import categories from '../assets/services_icons/categories.png';
import happy from '../assets/services_icons/happy.png';
import matching from '../assets/services_icons/matching.png';
import quickly from '../assets/services_icons/quickly.png';

// Sample service data (Replace icons with your local assets)
const services = [
    { title: "3D Industrial Design", icon: three_d },
    { title: "E-commerce Website Development", icon: website },
    { title: "Email Marketing", icon: marketing },
    { title: "Press Releases", icon: press },
    { title: "Logo Design", icon: logo }
];

// Sample benefits data (Replace icons with your local assets)
const benefits = [
    { title: "Access a pool of top talent across 700 categories", icon: categories },
    { title: "Enjoy a simple, easy-to-use matching experience", icon: happy },
    { title: "Get quality work done quickly and within budget", icon: matching },
    { title: "Only pay when you’re happy", icon: quickly }
];

const FreelancerServices = () => {
    return (
        <section className="container mx-auto px-6 py-16">
            {/* Services Section */}
            <div>
                <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-8">
                    Vontélle’s go-to services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                            {/* Corrected icon rendering */}
                            <img src={service.icon} alt={service.title} className="w-12 h-12" />
                            <h3 className="mt-4 text-md text-gray-800 text-center">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-light text-gray-800 text-left">
                    Make it all happen with freelancers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img src={benefit.icon} alt={benefit.title} className="w-12 h-12" />
                            <p className="mt-4 text-md text-gray-700">{benefit.title}</p>
                        </div>
                    ))}
                </div>
                {/* CTA Button */}
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-3 bg-black text-white rounded-md text-md hover:bg-gray-900 transition">
                        Join now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FreelancerServices;
