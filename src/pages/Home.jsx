import CategorySection from "../components/CategorySection";
import CTASection from "../components/CTASection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import FreelancerServices from "../components/FreelancerServices";
import GuidesSection from "../components/GuidesSection";
import HeroSection from "../components/HeroSection";
import MadeOnBelancer from "../components/MadeOnBelancer";
import Navbar from "../components/Navbar";
import PopularServices from "../components/PopularServices";
import RecommendedBadge from "../components/RecommendedBadge";


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
