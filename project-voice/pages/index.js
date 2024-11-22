import Navbar from '../components/Navbar';
import { HeroSectionHome } from '../components/HeroSection';
import { FeaturesSection } from '../components/Features';
import Footer from '../components/Footer';
import '../styles/home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSectionHome />
      <FeaturesSection />
      <Footer />
    </>
  );
}
