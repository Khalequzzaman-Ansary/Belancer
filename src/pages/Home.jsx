import CategorySection from "../components/home/CategorySection";
import CTASection from "../components/home/CTASection";
import FeatureSection from "../components/home/FeatureSection";
import Footer from "../components/home/Footer";
import FreelancerServices from "../components/home/FreelancerServices";
import GuidesSection from "../components/home/GuidesSection";
import HeroSection from "../components/home/HeroSection";
import MadeOnBelancer from "../components/home/MadeOnBelancer";
import Navbar from "../components/home/Navbar";
import PopularServices from "../components/home/PopularServices";
import RecommendedBadge from "../components/home/RecommendedBadge";


function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <CategorySection />
            <PopularServices />
            <FeatureSection />
            <RecommendedBadge />
            <FreelancerServices />
            <MadeOnBelancer />
            <GuidesSection />
            <CTASection />
            <Footer />
        </>
    );
}

export default Home;
