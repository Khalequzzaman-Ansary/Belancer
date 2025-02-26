import React from "react";

const CTASection = () => {
    return (
        <section className="bg-[#4a1c24] text-white text-center container mx-auto px-6 py-16 my-10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
                    Freelance services at your <span className="text-orange-400 font-medium">fingertips</span>
                </h2>
                <button className="mt-6 px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-gray-800 rounded-md text-lg font-medium hover:bg-gray-200 transition">
                    Join Belancer
                </button>
            </div>
        </section>

    );
};

export default CTASection;
