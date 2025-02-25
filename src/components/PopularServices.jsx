import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Service Data
const services = [
    { name: "Website Development", img: "/assets/website-development.jpg", bgColor: "bg-green-700" },
    { name: "Logo Design", img: "/assets/logo-design.jpg", bgColor: "bg-orange-400" },
    { name: "SEO", img: "/assets/seo.jpg", bgColor: "bg-green-900" },
    { name: "Architecture & Interior Design", img: "/assets/interior-design.jpg", bgColor: "bg-purple-800" },
    { name: "Voice Over", img: "/assets/voice-over.jpg", bgColor: "bg-brown-900" },
    { name: "Social Media Marketing", img: "/assets/social-media.jpg", bgColor: "bg-green-600" },
];

const PopularServices = () => {
    // Carousel settings
    const settings = {
        dots: true, // Enable pagination dots
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 cards at a time
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
                breakpoint: 768, // Mobile
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
                        <div className={`relative ${service.bgColor} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 font-thin`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {/* Service Name */}
                            <h3 className="font-bold text-lg">{service.name}</h3>

                            {/* Service Image */}
                            <div className="mt-4">
                                <img src={service.img} alt={service.name} className="w-full rounded-lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default PopularServices;
