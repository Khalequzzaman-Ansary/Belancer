import React from "react";
import badgeBanner from "../assets/project/belancer_banner.png"; // Ensure the correct image path

const RecommendedBadge = () => {
    return (
        <section className="container mx-auto flex flex-col items-center text-center px-4 md:px-12 lg:px-20 py-10">
            {/* Text Content (Left-Aligned) */}
            <div className="max-w-4xl text-left">
                <h3 className="text-2xl sm:text-3xl font-light text-gray-800">
                    What success on Belancer looks like
                </h3>
                <p className="text-sm sm:text-md text-gray-600 mt-1">
                    Vontélle Eyewear turns to Belancer freelancers to bring their vision to life.
                </p>
            </div>

            {/* Image Section (Remains Centered) */}
            <div className="w-full max-w-6xl mt-6 flex justify-center">
                <img src={badgeBanner} alt="Belancer Recommended Badge" className="w-full h-auto object-cover" />
            </div>
        </section>
    );
};

export default RecommendedBadge;
