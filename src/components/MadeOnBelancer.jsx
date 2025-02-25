import React from "react";
import image1 from '../assets/grid_images/image1.png'
import image2 from '../assets/grid_images/image2.png'
import image3 from '../assets/grid_images/image3.png'
import image4 from '../assets/grid_images/image4.png'
import image5 from '../assets/grid_images/image5.png'
import image6 from '../assets/grid_images/image6.png'
import image7 from '../assets/grid_images/image7.png'
import image8 from '../assets/grid_images/image8.png'
import image9 from '../assets/grid_images/image9.png'
import image10 from '../assets/grid_images/image10.png'
import image11 from '../assets/grid_images/image11.png'
import image12 from '../assets/grid_images/image12.png'
import image13 from '../assets/grid_images/image13.png'
import image14 from '../assets/grid_images/image14.png'
import image15 from '../assets/grid_images/image15.png'
import image16 from '../assets/grid_images/image16.png'

// Replace these with actual image paths
const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" },
    { src: image5, alt: "Image 5" },
    { src: image6, alt: "Image 6" },
    { src: image7, alt: "Image 7" },
    { src: image8, alt: "Image 8" },
    { src: image9, alt: "Image 9" },
    { src: image10, alt: "Image 10" },
    { src: image11, alt: "Image 11" },
    { src: image12, alt: "Image 12" },
    { src: image13, alt: "Image 13" },
    { src: image14, alt: "Image 14" },
    { src: image15, alt: "Image 15" },
    { src: image16, alt: "Image 16" },
];

const MadeOnBelancer = () => {
    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-light text-gray-800 mb-8">Made on Belancer</h2>

            {/* Masonry Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-[minmax(150px, auto)] grid-auto-flow-dense">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`rounded-lg overflow-hidden shadow-md ${index % 4 === 0 ? "row-span-2" : "row-span-1"
                            }`}
                    >
                        <img src={image.src} alt={image.alt} className="w-full h-auto object-cover aspect-square" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MadeOnBelancer;
