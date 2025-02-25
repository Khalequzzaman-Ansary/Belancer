import React from "react";
import help_1 from '../assets/Help_Section/help_section1.png';
import help_2 from '../assets/Help_Section/help_section2.png';
import help_3 from '../assets/Help_Section/help_section3.png';

const guides = [
    {
        image: help_1,
        title: "Start a side business",
    },
    {
        image: help_2, // Replace with actual image path
        title: "Ecommerce business Ideas",
    },
    {
        image: help_3, // Replace with actual image path
        title: "Start an online business and work from home",
    },
];

const GuidesSection = () => {
    return (
        <section className="container mx-auto px-6 py-16">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-3xl font-light text-gray-800 text-center sm:text-left">
                    Guides to help you grow
                </h2>
                <a href="#" className="text-gray-600 hover:underline hidden sm:block">See more</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {guides.map((guide, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={guide.image} alt={guide.title} className="w-full h-48 sm:h-56 object-cover" />
                        <div className="p-4">
                            <p className="text-center font-semibold text-gray-700">{guide.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GuidesSection;
