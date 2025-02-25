import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import website from '../assets/Carousel/website.png';
import logo from '../assets/Carousel/logo.png';
import seo from '../assets/Carousel/seo.png';
import architecture from '../assets/Carousel/architecture.png';
import voice from '../assets/Carousel/voice.png';
import marketing from '../assets/Carousel/marketing.png';
import video from '../assets/Carousel/video.png';

// Service Data
const services = [
    { name: "Website Development", img: website, bgColor: "bg-green-700" },
    { name: "Logo Design", img: logo, bgColor: "bg-orange-400" },
    { name: "SEO", img: seo, bgColor: "bg-green-900" },
    { name: "Architecture & Interior Design", img: architecture, bgColor: "bg-purple-800" },
    { name: "Voice Over", img: voice, bgColor: "bg-orange-400" },
    { name: "Social Media Marketing", img: marketing, bgColor: "bg-green-600" },
    { name: "UGC Videos", img: video, bgColor: "bg-green-600" },
];

const PopularServices = () => {
    // Carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768, // Smaller Tablets
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480, // Mobile Phones
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="container mx-auto my-10 px-4">
            {/* Section Title with Montserrat Font */}
            <h2 className="text-3xl font-light text-gray-900 text-left mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Popular Services
            </h2>

            {/* Carousel */}
            <Slider {...settings}>
                {services.map((service, index) => (
                    <div key={index} className="px-2">
                        <div className={`relative ${service.bgColor} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 font-thin w-[200px] h-[240px] flex flex-col items-center justify-between`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {/* Service Name */}
                            <h3 className="font-bold text-md text-center leading-tight">{service.name}</h3>

                            {/* Service Image */}
                            <div className="w-[150px] h-[120px] rounded-lg overflow-hidden flex items-center justify-center">
                                <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default PopularServices;
