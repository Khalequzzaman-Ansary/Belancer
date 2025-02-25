import CategorySection from "../components/CategorySection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PopularServices from "../components/PopularServices";


function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <CategorySection />
            <PopularServices />
            <FeatureSection />
            <Footer />
        </>
    );
}

export default Home;
