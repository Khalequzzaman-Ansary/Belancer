import React from "react";
import badgeBanner from "../../assets/project/belancer_banner.png";

const RecommendedBadge = () => {
    return (
        <section className="container mx-auto flex flex-col px-6 py-16">
            {/* Text Content (Left-Aligned) */}
            <div className="text-left">
                <h3 className="text-2xl font-normal text-gray-800">
                    What success on Belancer looks like
                </h3>
                <p className="text-base text-gray-600 mt-3">
                    Vontélle Eyewear turns to Belancer freelancers to bring their vision to life.
                </p>
            </div>

            {/* Image Section (Remains Centered) */}
            <div className="px-5 pt-5 flex justify-center items-center">
                <img src={badgeBanner} alt="Belancer Recommended Badge" className="object-contain" />
            </div>
        </section>
    );
};

export default RecommendedBadge;
