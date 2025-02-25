import React from 'react';

const FeatureSection = () => {

    const features = [
        { title: "Dedicated Hiring Experts", desc: "Get matched with the right freelancers." },
        { title: "Satisfaction Guarantee", desc: "Refunds for unsatisfactory work." },
        { title: "Advanced Management Tools", desc: "Seamlessly integrate freelancers into your team." },
        { title: "Flexible Payment Models", desc: "Pay per project or hourly rates." },
    ];

    return (
        <section className="container mx-auto my-10 bg-gray-100 p-6 rounded">
            <h2 className="text-3xl font-bold text-center mb-6">Why Choose Belancer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <h3 className="font-bold">{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;