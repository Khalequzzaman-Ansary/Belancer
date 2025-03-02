import React from 'react';
import Navbar from '../components/Pro/Navbar';
import HeroSection from '../components/Pro/HeroSection';
import ServiceCategories from '../components/Pro/ServiceCategories';
import Footer from '../components/Pro/Footer';
import FreelancerBenefits from '../components/Pro/FreelancerBenefits';

const Pro = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ServiceCategories />
            <FreelancerBenefits />
            <Footer />
        </>
    );
};

export default Pro;