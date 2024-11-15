import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {HeroSectionAbout} from '../components/HeroSection';
import {TeamSection} from '../components/TeamSection';

export default function About() {
  return (
    <>
      <Navbar />
      <HeroSectionAbout />
      <section className="py-5">
        <div className="container">
          <div className="mission-card">
            <h2 className="mb-4 text-primary">Breaking Barriers in Communication</h2>
            <p className="lead">Today, non-verbal children are often misunderstood and their cognitive abilities underestimated...</p>
          </div>
          {/* Add additional sections here */}
        </div>
      </section>
      <TeamSection />
      <Footer />
    </>
  );
}
