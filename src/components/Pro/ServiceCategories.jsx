import React from "react";
import AIChatbots from '../../assets/Pro/ServiceCategory/AIChatbots.png';
import E_Commerce from '../../assets/Pro/ServiceCategory/E-Commerce.png';
import SEO from '../../assets/Pro/ServiceCategory/SEO.png';
import UI_UX from '../../assets/Pro/ServiceCategory/UI_UX.png';
import Video_Animation from '../../assets/Pro/ServiceCategory/Video_Animation.png';
import Website from '../../assets/Pro/ServiceCategory/Website.png';

const categories = [
    { title: "UI / UX", image: UI_UX },
    { title: "Website Development", image: Website },
    { title: "SEO", image: SEO },
    { title: "Video & Animation", image: Video_Animation },
    { title: "E-Commerce", image: E_Commerce },
    { title: "AI & Chatbots", image: AIChatbots },
];

const ServiceCategories = () => {
    return (
        <div className="w-full px-5 py-8">
            {/* Mobile View: 2 rows, 3 columns */}
            <div className="grid grid-cols-3 gap-4 md:hidden">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-transform"
                    >
                        <img src={category.image} alt={category.title} className="w-16 h-16 object-contain" />
                        <p className="mt-2 text-xs font-medium text-gray-700">{category.title}</p>
                    </div>
                ))}
            </div>

            {/* Desktop View: Grid Layout */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 hover:scale-105 transition-transform"
                    >
                        <img src={category.image} alt={category.title} className="w-16 h-16 object-contain" />
                        <p className="mt-2 text-sm font-medium text-gray-700">{category.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCategories;
