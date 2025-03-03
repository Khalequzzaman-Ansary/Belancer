import React from 'react';
import Navbar from '../components/Pro/Navbar';
import HeroSection from '../components/Pro/HeroSection';
import ServiceCategories from '../components/Pro/ServiceCategories';
import Footer from '../components/Pro/Footer';
import FreelancerBenefits from '../components/Pro/FreelancerBenefits';
import UpgradeToBelancerPro from '../components/Pro/UpgradeToBelancerPro';
import VettedFreelancers from '../components/Pro/VettedFreelancers';

const Pro = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <ServiceCategories />
            <FreelancerBenefits />
            <UpgradeToBelancerPro />
            <VettedFreelancers />
            <Footer />
        </>
    );
};

export default Pro;