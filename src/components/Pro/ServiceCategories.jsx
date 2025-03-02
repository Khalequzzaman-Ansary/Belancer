import React from "react";

const categories = [
    { title: "UI / UX", image: "/images/ui-ux.png" },
    { title: "Website Development", image: "/images/web-dev.png" },
    { title: "SEO", image: "/images/seo.png" },
    { title: "Video & Animation", image: "/images/video-animation.png" },
    { title: "E-Commerce", image: "/images/ecommerce.png" },
    { title: "AI & Chatbots", image: "/images/ai-chatbots.png" },
];

const ServiceCategories = () => {
    return (
        <div className="w-full px-4 py-6">
            {/* Mobile View: Scrollable */}
            <div className="flex space-x-4 overflow-x-auto md:hidden scrollbar-hide">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 min-w-[160px] hover:scale-105 transition-transform"
                    >
                        <img src={category.image} alt={category.title} className="w-16 h-16 object-contain" />
                        <p className="mt-2 text-sm font-medium text-gray-700">{category.title}</p>
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
