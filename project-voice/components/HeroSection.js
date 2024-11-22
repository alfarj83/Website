import Image from 'next/image';

export function HeroSectionAbout() {
    return (
      <section className="hero-gradient">
        <div className="container text-center">
          <Image src="../public/project-voice-logo.png" id="logo" alt="Project Voice Logo" />
          <h1 className="display-4 fw-bold mb-4">Our Mission</h1>
          <p className="lead mb-4">Challenging perceptions and empowering non-verbal individuals through innovative technology and research.</p>
        </div>
      </section>
    );
  }

  export function HeroSectionHome() {
    return (
      <section className="hero-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image src="../public/project-voice-logo.png" id="logo" alt="Project Voice Logo" />
              <h1 className="display-4 fw-bold mb-3">
                Project Voice
                <span className="d-block text-info">Empowering Communication Through AI Innovation</span>
              </h1>
              <p className="lead mb-4">
                An open-source initiative developing AI-based communication solutions for non-verbal individuals with mobility disorders. Join our community of researchers and developers working towards accessible communication for all.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-light btn-lg">Get Started</a>
                <a href="#" className="btn btn-outline-light btn-lg">View Documentation</a>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 text-center">
              <Image src="../public/ai_transparent.png" alt="AI Communication System" className="img-fluid hero-image" id="ai_image" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  export function HeroSectionResearch() {
    return (
      <div className="gradient-header mb-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Research Database</h1>
          <p className="lead">Manage and explore our research paper collection</p>
        </div>
      </div>
    );
  }
  
  export function HeroSectionCode() {
    return (
      <div className="gradient-header mb-5">
      <div className="container">
        <h1 className="display-4 fw-bold">Code Database</h1>
        <p className="lead">Manage and explore our code experiment collection</p>
      </div>
    </div>
    );
  }
  