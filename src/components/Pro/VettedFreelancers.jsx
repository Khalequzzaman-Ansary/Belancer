import React from "react";

const VettedFreelancers = () => {
    return (
        <section className="w-full px-6 py-12">
            <div className="mx-auto bg-cyan-100 border border-blue-300 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Title */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                        Work with vetted, <br /> trusted freelance talent
                    </h2>

                    {/* Right Column - Description */}
                    <p className="text-gray-700 leading-relaxed">
                        Our industry experts evaluate every Belancer Pro freelancer before they are
                        accepted and continue to hold them to the highest standards during their
                        activity on Belancer Pro.
                        <br /><br />
                        When working with Belancer Pro freelance talent, you can expect vast
                        experience, creativity, top communication and customer service skills,
                        and the flexibility to take on long-term engagements.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VettedFreelancers;
