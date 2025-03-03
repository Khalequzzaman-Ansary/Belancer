import React, { useState } from "react";
import Tailored_hiring_services from '../../assets/Pro/Benefits/Tailored_hiring_services.png';
import Integrated_team from '../../assets/Pro/Benefits/Integrated_team.png';
import Guaranteed_satisfaction from '../../assets/Pro/Benefits/Guaranteed_satisfaction.png';
import Hiring_models from '../../assets/Pro/Benefits/Hiring_models.png';

const benefits = [
    {
        title: "Tailored hiring services",
        description: "Dedicated hiring experts help you find the right freelance talent for your specific needs.",
        image: Tailored_hiring_services,
        alt: "Hiring Expert"
    },
    {
        title: "Satisfaction guaranteed",
        description: "Belancer Pro talent delivers high-quality work. If you’re not satisfied with the deliverables, we’ll refund you.",
        image: Guaranteed_satisfaction,
        alt: "Refund Process"
    },
    {
        title: "Multiple hiring models",
        description: "Option to hire on an hourly basis or by the project - for either long or short-term needs.",
        image: Hiring_models,
        alt: "Multiple Hiring Models"
    },
    {
        title: "Integrated into your team",
        description: "Tools to manage and collaborate with freelance talent as an integrated part of your team.",
        image: Integrated_team,
        alt: "Team Collaboration"
    }
];

const FreelancerBenefits = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full px-6 py-12">
            <h2 className="text-2xl md:text-3xl font-light text-start mb-8">
                Everything businesses need to work with top freelancers
            </h2>

            {/* Desktop Grid View */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform"
                    >
                        <h3 className="text-lg font-semibold">{benefit.title}</h3>
                        <p className="text-gray-600 mt-2">{benefit.description}</p>
                        <div className="mt-4">
                            <img
                                src={benefit.image}
                                alt={benefit.alt}
                                className="w-full h-40 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Accordion View */}
            <div className="md:hidden space-y-4">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-4"
                    >
                        <button
                            className="w-full flex items-center justify-between text-lg font-medium"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="flex items-center space-x-2">
                                <span className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded-full text-gray-700">
                                    {index + 1}
                                </span>
                                <span>{benefit.title}</span>
                            </span>
                            <span>{openIndex === index ? "▲" : "▼"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="mt-2 text-gray-600">
                                <p>{benefit.description}</p>
                                <div className="mt-4">
                                    <img
                                        src={benefit.image}
                                        alt={benefit.alt}
                                        className="w-full h-40 object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-12">
                <button className="bg-black text-white px-6 py-2 rounded-lg font-normal hover:bg-gray-800 transition">
                    Get Started with Belancer Pro
                </button>
            </div>
        </section>
    );
};

export default FreelancerBenefits;
