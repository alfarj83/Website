import { HeroSectionHome } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { FooterSection } from '../components/FooterSection';
import '../styles/home.css'; 

export default function HomePage() {
  return (
    <>
      <HeroSectionHome />
      <FeaturesSection />
      <FooterSection />
    </>
  );
}
