import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaGlobe, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [language, setLanguage] = useState("English");

    return (
        <nav className="bg-white shadow-md container mx-auto px-6 py-3">
            <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4">
                {/* Left Side: Logo + Search Bar */}
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-2xl font-bold text-blue-600">Belancer <span className="text-gray-900 text-2xl font-semibold">pro.</span></Link>


                    {/* Search Bar (Hidden on small screens) */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search for any service..."
                            className="px-4 py-2 border rounded-lg w-96 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-lg">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* Right Side: Links and Buttons (Hidden on small screens) */}
                <div className="hidden md:flex text-sm items-center gap-5">
                    {/* Expandable Product Button */}
                    <div className="relative cursor-pointer hover:text-blue-600"
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                    >
                        Products <FaChevronDown className="inline ml-1 text-sm" />
                        {isProductsOpen && (
                            <div className="absolute top-6 left-0 bg-white shadow-lg border rounded-md w-48 py-2 z-50">
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Trending</Link>
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">New Arrivals</Link>
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Popular Services</Link>
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Featured</Link>
                            </div>
                        )}
                    </div>

                    <Link>Plans</Link>

                    {/* Expandable Explore Button */}
                    <div
                        className="relative cursor-pointer hover:text-blue-600"
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                        Resources <FaChevronDown className="inline ml-1 text-sm" />
                        {isResourcesOpen && (
                            <div className="absolute top-6 left-0 bg-white shadow-lg border rounded-md w-48 py-2 z-50">
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Trending</Link>
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">New Arrivals</Link>
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Popular Services</Link>
                                <Link to="#" className="block px-4 py-2 hover:bg-gray-100">Featured</Link>
                            </div>
                        )}
                    </div>

                    {/* Language Selector */}

                    <Link to="#" className="hover:text-blue-600">Become a Freelancer</Link>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                        <FaGlobe />
                        <span>{language}</span>
                    </div>
                    <Link to="#" className="hover:text-blue-600">Sign In</Link>
                    <Link to="#" className="border border-green-500 text-green-500 p-2 rounded-md hover:bg-green-500 hover:text-white">
                        Join
                    </Link>

                </div>

                {/* Hamburger Menu (Visible on small screens) */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu (Hidden on large screens) */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md m-2 border-t">
                    <div className="p-4 flex bg-cyan-600 text-white rounded-lg flex-col gap-4">
                        <Link to="/pro" className="hover:text-black">Belancer Pro</Link>
                        <div
                            className="cursor-pointer hover:text-black"
                            onClick={() => setIsExploreOpen(!isExploreOpen)}
                        >
                            Explore <FaChevronDown className="inline ml-1 text-sm" />
                        </div>
                        {isExploreOpen && (
                            <div className="pl-4 space-y-2 border-white border-4">
                                <Link to="/trending" className="block hover:text-blue-600">Trending</Link>
                                <Link to="/new" className="block hover:text-blue-600">New Arrivals</Link>
                                <Link to="/popular" className="block hover:text-blue-600">Popular Services</Link>
                                <Link to="/featured" className="block hover:text-blue-600">Featured</Link>
                            </div>
                        )}
                        <Link to="/seller" className="hover:text-black rounded-md">Become a Seller</Link>
                        <Link to="/login" className="border border-white text-white text-center py-1 rounded-md hover:bg-sky-600 hover:text-white w-1/4">Sign In</Link>
                        <Link to="/join" className="border border-white text-white text-center py-1 rounded-md hover:bg-sky-600 hover:text-white w-1/4">
                            Join
                        </Link>
                    </div>
                </div>
            )}

            {/* Second Row: Categories (Visible on large screens) */}
            <div className="hidden md:flex container mx-auto mt-2 border-t pt-2 justify-center gap-6 text-gray-700 font-sans text-xs tracking-wide whitespace-nowrap overflow-x-auto">
                {[
                    "Graphics & Design",
                    "Programming & Tech",
                    "Digital Marketing",
                    "Video & Animation",
                    "Writing & Translation",
                    "Music & Audio",
                    "Business",
                    "Finance",
                    "AI Services",
                    "Personal Growth",
                ].map((category, index) => (
                    <Link
                        key={index}
                        to={`/category/${category.replace(/\s+/g, "-").toLowerCase()}`}
                        className="hover:text-blue-600 transition-colors duration-200"
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
