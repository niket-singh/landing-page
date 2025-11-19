import React, { useEffect } from 'react';
import NavbarV2 from '../components/NavbarV2';
import HeroDark from '../components/HeroDark';
import StatsSection from '../components/StatsSection';
import ServicesV2 from '../components/ServicesV2';
import HowItWorksV2 from '../components/HowItWorksV2';
import BenefitsV2 from '../components/BenefitsV2';
import UseCasesSection from '../components/UseCasesSection';
import CollegeLogosSoulAI from '../components/CollegeLogosSoulAI';
import FAQV2 from '../components/FAQV2';
import Contact from '../components/Contact';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/theme.css';
import '../styles/animations.css';
import '../styles/sections.css';
import '../styles/MASTER_THEME.css';

const LandingPage = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="landing-page">
      {/* Glass Navbar */}
      <NavbarV2 />

      {/* 1. Hero Section - Dark Gradient with Animated Blob */}
      <HeroDark />

      {/* 2. Stats Section - Animated Counters (Soul AI Style) */}
      <StatsSection />

      {/* 3. Our Services - Blue Background */}
      <div id="services" className="section-blue">
        <ServicesV2 />
      </div>

      {/* 4. How to Join (Mapped to HowItWorks) - White Background */}
      <div id="how-it-works" className="section-white">
        <HowItWorksV2 />
      </div>

      {/* 5. Why to Choose (Mapped to Benefits) - Blue Background */}
      <div id="benefits" className="section-blue">
        <BenefitsV2 />
      </div>

      {/* 6. Deep Expertise in AI/ML Use Cases (Deccan AI Inspired) */}
      <div id="expertise">
        <UseCasesSection />
      </div>

      {/* 7. Experts from Top Colleges (Soul AI) - Blue Background */}
      <div className="section-blue">
        <CollegeLogosSoulAI />
      </div>

      {/* 8. FAQ Section - White Background */}
      <div id="faq" className="section-white">
        <FAQV2 />
      </div>

      {/* 9. Contact - Blue Background */}
      <div id="contact" className="section-blue">
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