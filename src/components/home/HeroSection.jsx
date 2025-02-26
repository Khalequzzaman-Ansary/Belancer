import { FaSearch } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { BsMicrosoft, BsNvidia, BsPaypal } from "react-icons/bs";

function HeroSection() {
    return (
        <section className="bg-[#0087A8] text-white text-center container mx-auto px-6 py-16 sm:px-8 my-6 rounded-2xl">
            <div className="w-full max-w-screen-xl mx-auto">
                {/* Top Text */}
                <p className="text-sm uppercase tracking-wide font-light">Meet Belancer Go <span className="bg-white text-[#0087A8] px-2 py-1 rounded-full text-xs ml-2">NEW</span></p>

                {/* Main Heading */}
                <h1 className="text-5xl font-light mt-3 leading-tight">
                    Scale your professional <br />
                    workforce with freelancers
                </h1>

                {/* Search Bar */}
                <div className="relative mt-6 w-full max-w-full md:max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Search for any service..."
                        className="w-full px-4 sm:px-6 py-3 rounded-full text-gray-600 focus:outline-none shadow-md"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-700 text-white p-3 rounded-full">
                        <FaSearch />
                    </button>
                </div>

                {/* Trusted Brands Section */}

                <div className="flex justify-center items-center gap-6 mt-14">
                    <p className="text-gray-200 font-normal italic whitespace-nowrap">Trusted by:</p>
                    <div className="flex gap-5 items-center">
                        <p><FaMeta /></p>
                        <p><FaGoogle /></p>
                        <p><SiNetflix /></p>
                        <p><BsPaypal /></p>
                        <p><BsNvidia /></p>
                        <p><BsMicrosoft /></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
