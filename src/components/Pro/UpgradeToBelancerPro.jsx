import React, { useState } from "react";

const faqItems = [
    { title: "Tailored services", content: "Belancer Pro offers personalized hiring solutions tailored to your business needs." },
    { title: "Hiring solutions", content: "Find the best freelancers with specialized skills for your projects." },
    { title: "Quality assurance", content: "All freelancers go through a rigorous vetting process to ensure top quality." },
    { title: "Management tools", content: "Integrated tools to help manage your freelance workforce efficiently." },
    { title: "Easy payment options", content: "Multiple payment methods and seamless transactions for hiring." },
    { title: "Compliance add-ons", content: "Legal and compliance support to help businesses hire safely and securely." },
];

const UpgradeToBelancerPro = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full px-6 py-12  mx-auto">
            {/* Title & Description */}
            <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-light text-gray-900">
                    Why upgrade to Belancer Pro?
                </h2>
                <p className="text-gray-600 mt-4 text-justify leading-relaxed">
                    Belancer Pro is an all-in-one, premium business solution enabling you to
                    recruit, onboard, manage, and pay freelance talent without hassle, so
                    you can seamlessly execute complex projects of any size.
                </p>
            </div>

            {/* FAQ List */}
            <div className="mt-6 px-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            className="w-full flex items-center justify-between py-4 text-lg font-medium focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.title}
                            <span className="text-gray-500">{openIndex === index ? "▲" : "▼"}</span>
                        </button>
                        {openIndex === index && (
                            <p className="text-gray-600 pb-4">{item.content}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UpgradeToBelancerPro;
