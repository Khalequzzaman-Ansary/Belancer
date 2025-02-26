import React, { useState } from 'react';
import { FaTiktok, FaInstagram, FaLinkedin, FaFacebook, FaPinterest } from 'react-icons/fa';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { GlobeAltIcon, CurrencyDollarIcon, UserIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <footer className="bg-gray-100 text-gray-800 container mx-auto px-6 pt-16 pb-7">
            {/* Desktop Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

                {[
                    { title: "Categories", items: ["Graphics & Design", "Digital Marketing", "Writing & Translation", "Video & Animation", "Music & Audio", "Programming & Tech", "AI Services", "Consulting", "Data", "Business", "Personal Growth & Hobbies", "Photography", "Finance", "End-to-End Projects", "Service Catalog"] },
                    { title: "For Clients", items: ["How Belancer Works", "Customer Success Stories", "Trust & Safety", "Quality Guide", "Belancer Learn (Online Courses)", "Belancer Guides", "Belancer Answers"] },
                    { title: "For Freelancers", items: ["Become a Belancer Freelancer", "Become an Agency", "Kickstart", "Community Hub", "Forum", "Events"] },
                    { title: "Business Solutions", items: ["Belancer Pro", "Project Management Service", "ClearVoice (Content Marketing)", "Working Not Working (Creative Talent)", "AutoDS (Dropshipping Tool)", "Belancer Logo Maker", "Contact Sales"] },
                    { title: "Company", items: ["About Belancer", "Help & Support", "Social Impact", "Careers", "Terms of Service", "Privacy Policy", "Do not sell or share my personal information", "Partnerships", "Creator Network", "Affiliates", "Invite a Friend", "Press & News", "Investor Relations"] }
                ].map((section, index) => (
                    <div key={index} className="border-b border-gray-300 pb-2 last:border-none lg:border-none">
                        {/* Section Title */}
                        <button
                            className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none py-3 lg:py-0 text-lg font-semibold"
                            onClick={() => toggleSection(section.title)}
                        >
                            {section.title}
                            <ChevronDownIcon
                                className={`w-5 h-5 lg:hidden transform transition-transform ${openSections[section.title] ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        {/* Collapsible Items - Hidden on Mobile by Default */}
                        <ul className={`space-y-2 text-sm transition-all duration-300 ${openSections[section.title] ? "block" : "hidden"} lg:block`}>
                            {section.items.map((item, idx) => (
                                <li key={idx} className="pl-4 lg:pl-0">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm max-w-7xl mx-auto px-4">

                {/* Logo & Copyright */}
                <div className="flex flex-col sm:flex-row items-center space-x-2">
                    <span className="font-bold text-blue-600 text-2xl">Belancer</span>
                    <span className="text-gray-500">© Belancer International Ltd. 2025</span>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4 text-gray-600 mt-4 sm:mt-0">
                    <FaTiktok className="w-5 h-5 cursor-pointer hover:text-black" />
                    <FaInstagram className="w-5 h-5 cursor-pointer hover:text-black" />
                    <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-black" />
                    <FaFacebook className="w-5 h-5 cursor-pointer hover:text-black" />
                    <FaPinterest className="w-5 h-5 cursor-pointer hover:text-black" />
                </div>

                {/* Language & Currency Selector */}
                <div className="flex flex-wrap justify-center sm:justify-end space-x-4 mt-4 sm:mt-0">
                    <div className="flex items-center cursor-pointer">
                        <GlobeAltIcon className="w-5 h-5 text-gray-600" />
                        <span className="ml-1">English</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <CurrencyDollarIcon className="w-5 h-5 text-gray-600" />
                        <span className="ml-1">$ USD</span>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <UserIcon className="w-5 h-5 text-gray-600" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
