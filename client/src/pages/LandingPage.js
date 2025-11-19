import React from 'react';
import NavbarV2 from '../components/NavbarV2';
import HeroWhiteBlue from '../components/HeroWhiteBlue';
import ServicesV2 from '../components/ServicesV2';
import HowItWorksV2 from '../components/HowItWorksV2';
import BenefitsV2 from '../components/BenefitsV2';
import ExpertiseDeccan from '../components/ExpertiseDeccan';
import CollegeLogosSoulAI from '../components/CollegeLogosSoulAI';
import FAQV2 from '../components/FAQV2';
import Contact from '../components/Contact';
import '../styles/MASTER_THEME.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Animated Background Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Glass Navbar */}
      <NavbarV2 />

      {/* 1. Hero Section (Clean, Blue, No Icon Boxes) */}
      <HeroWhiteBlue />

      {/* 2. Our Services */}
      <div id="services">
        <ServicesV2 />
      </div>

      {/* 3. How to Join (Mapped to HowItWorks) */}
      <div id="how-it-works">
        <HowItWorksV2 />
      </div>

      {/* 4. Why to Choose (Mapped to Benefits) */}
      <div id="benefits">
        <BenefitsV2 />
      </div>

      {/* 5. AI/ML Use Cases (Copied from Deccan AI) */}
      <div id="expertise">
        <ExpertiseDeccan />
      </div>

      {/* 6. Experts from Top Colleges (Copied from Soul AI) */}
      <CollegeLogosSoulAI />

      {/* 7. FAQ Section */}
      <div id="faq">
        <FAQV2 />
      </div>

      {/* 8. Contact */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer (Keep existing simple V2 footer structure) */}
      <footer className="footer-v2 section-dark-blue" style={{ padding: '4rem 2rem' }}>
        <div className="container-v2">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>Adzzat</h2>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Exceptional Humans. Exceptional AI.</p>
            </div>
            <div style={{ opacity: 0.6 }}>
              &copy; 2024 Adzzat. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;