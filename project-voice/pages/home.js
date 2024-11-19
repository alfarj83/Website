import { HeroSectionHome } from '../components/HeroSection';
import { FeaturesSection } from '../components/Features';
import Footer from '../components/Footer';
import '../styles/home.css'; 

export default function HomePage() {
  return (
    <>
      <HeroSectionHome />
      <FeaturesSection />
      <Footer />
    </>
  );
}
