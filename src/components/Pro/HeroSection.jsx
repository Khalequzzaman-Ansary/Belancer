import React from "react";
import { FaSearch } from "react-icons/fa";
import HeroImage from "../../assets/Pro/Pro_hero1.png";
import hitachi from '../../assets/Pro/hero_icons/hitachi.png';
import loreal from '../../assets/Pro/hero_icons/loreal.png';
import myheritage from '../../assets/Pro/hero_icons/myheritage.png';
import netflix from '../../assets/Pro/hero_icons/netflix.png';
import similar from '../../assets/Pro/hero_icons/similar.png';
import skechers from '../../assets/Pro/hero_icons/skechers.png';
import uniliver from '../../assets/Pro/hero_icons/uniliver.png';

const HeroSection = () => {
    return (
        <section className="bg-[#0087A8] text-white m-5 py-12 px-6 md:px-12 rounded-xl">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">

                {/* Left Side: Heading & Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl md:text-4xl font-light leading-tight">
                        A premium business solution <br />
                        <span className="text-white">that delivers trusted talent</span>
                    </h1>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
                        <button className="bg-white text-black font-normal px-4 py-2 rounded-lg shadow-lg">
                            Browse freelancers
                        </button>
                        <button className="bg-[#2C9CC3] font-normal px-4 py-2 rounded-lg shadow-lg">
                            Post a project brief
                        </button>
                        <button className="bg-[#2C9CC3] font-normal px-4 py-2 rounded-lg shadow-lg">
                            Sourcing experts
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full max-w-lg mt-10">
                        <input
                            type="text"
                            placeholder="Search for skills or services"
                            className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-lg">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* Right Side: Freelancer Cards Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img src={HeroImage} alt="Freelancers" className="max-w-md w-full h-auto" />
                </div>
            </div>

            {/* Brands Section (Placeholder for Logos) */}
            <div className="mt-10 w-full py-3 rounded-lg flex flex-wrap md:flex-nowrap items-center justify-between px-6">
                {/* Left Side Text */}
                <div className="text-white text-sm md:text-base font-normal">
                    Brands who hire with Belancer Pro
                </div>

                {/* Right Side Logos */}
                <div className="flex justify-center md:justify-end gap-6 flex-wrap md:flex-nowrap">
                    <span><img src={hitachi} alt="hero_logo" /></span>
                    <span><img src={similar} alt="hero_logo" /></span>
                    <span><img src={skechers} alt="hero_logo" /></span>
                    <span><img src={myheritage} alt="hero_logo" /></span>
                    <span><img src={netflix} alt="hero_logo" /></span>
                    <span><img src={loreal} alt="hero_logo" /></span>
                    <span><img src={uniliver} alt="hero_logo" /></span>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;
