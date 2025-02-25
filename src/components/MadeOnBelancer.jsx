import React from "react";
import image1 from '../assets/grid_images/image1.png';
import image2 from '../assets/grid_images/image2.png';
import image3 from '../assets/grid_images/image3.png';
import image4 from '../assets/grid_images/image4.png';
import image5 from '../assets/grid_images/image5.png';
import image6 from '../assets/grid_images/image6.png';
import image7 from '../assets/grid_images/image7.png';
import image8 from '../assets/grid_images/image8.png';
import image9 from '../assets/grid_images/image9.png';
import image10 from '../assets/grid_images/image10.png';
import image11 from '../assets/grid_images/image11.png';
import image12 from '../assets/grid_images/image12.png';
import image13 from '../assets/grid_images/image13.png';
import image14 from '../assets/grid_images/image14.png';
import image15 from '../assets/grid_images/image15.png';
import image16 from '../assets/grid_images/image16.png';

// Ensure no empty images
const images = [
    image1, image2, image3, image4, image5, image6, image7, image8,
    image9, image10, image11, image12, image13, image14, image15, image16
].filter(img => img); // Removes null/undefined images

const MadeOnBelancer = () => {
    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-light text-gray-800 mb-8">Made on Belancer</h2>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-[minmax(150px, auto)]">
                {images.map((src, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md flex items-center justify-center">
                        <img src={src} alt={`Image ${index + 1}`} className="max-w-full max-h-full object-contain" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MadeOnBelancer;
