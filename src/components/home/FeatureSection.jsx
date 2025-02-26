import React from 'react';
import projectImage from "../../assets/project/project_status.png";
import checkIcon from "../../assets/project/check.png";

const FeatureSection = () => {
    return (
        <section className="bg-blue-100 my-12 rounded-2xl flex flex-col md:flex-row items-center justify-between mx-auto w-full container p-20">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-6">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight">
                    The <span className="text-blue-500 font-semibold">premium</span> freelance solution for businesses
                </h2>

                {/* Feature List - Two Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
                    {[
                        { title: "Dedicated hiring experts", desc: "Count on an account manager to find you the right talent and see to your project's every need." },
                        { title: "Satisfaction guarantee", desc: "Order confidently, with guaranteed refunds for less-than-satisfactory deliveries." },
                        { title: "Advanced management tools", desc: "Seamlessly integrate freelancers into your team and projects." },
                        { title: "Flexible payment models", desc: "Pay per project or opt for hourly rates to facilitate longer-term collaboration." }
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                            <img src={checkIcon} alt="check" className="w-5 h-5 mr-2" />
                            <div>
                                <strong className="text-lg">{feature.title}</strong>
                                <p className="text-sm">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition w-full sm:w-auto">
                    Try Now
                </button>
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img src={projectImage} alt="Project Status" className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg" />
            </div>
        </section>
    );
};

export default FeatureSection;
