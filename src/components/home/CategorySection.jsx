import React from 'react';
import programming from '../../assets/programming.png';
import graphics from '../../assets/graphics.png';
import digital_marketing from '../../assets/digital_marketing.png';
import translation from '../../assets/translation.png';
import video from '../../assets/video.png'
import ai from '../../assets/ai.png'
import music from '../../assets/music.png'
import business from '../../assets/business.png'
import consulting from '../../assets/consulting.png'

const CategorySection = () => {

    const categories = [
        { name: "Programming & Tech", icon: programming },
        { name: "Graphics & Design", icon: graphics },
        { name: "Digital Marketing", icon: digital_marketing },
        { name: "Writing & Translation", icon: translation },
        { name: "Video & Animation", icon: video },
        { name: "AI Services", icon: ai },
        { name: "Music & Audio", icon: music },
        { name: "Business", icon: business },
        { name: "Consulting", icon: consulting },
    ];

    return (
        <section className="container mx-auto my-10 px-6 py-3">

            {/* Service Cards Grid */}
            <div className="flex justify-center gap-4 flex-wrap">
                {categories.map((service, index) => (
                    <div key={index} className="bg-white w-[140px] p-4 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
                        <img src={service.icon} alt={service.name} className="h-10 mb-2" />
                        <p className="font-semibold text-gray-700 text-sm">{service.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;