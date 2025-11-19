import React, { useEffect, useState } from 'react';
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
import ContactModal from '../components/ContactModal';
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/theme.css';
import '../styles/animations.css';
import '../styles/sections.css';
import '../styles/MASTER_THEME.css';

const LandingPage = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // Modal state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="landing-page">
      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      {/* Glass Navbar */}
      <NavbarV2 />

      {/* 1. Hero Section - Dark Gradient with Animated Blob */}
      <HeroDark openContactModal={openContactModal} />

      {/* 2. Stats Section - Animated Counters (Soul AI Style) */}
      <StatsSection />

      {/* 3. Our Services */}
      <div id="services">
        <ServicesV2 openContactModal={openContactModal} />
      </div>

      {/* 4. How to Join (Mapped to HowItWorks) - BLUE BACKGROUND */}
      <div id="how-it-works" className="section-blue">
        <HowItWorksV2 openContactModal={openContactModal} />
      </div>

      {/* 5. Why to Choose (Mapped to Benefits) */}
      <div id="benefits">
        <BenefitsV2 openContactModal={openContactModal} />
      </div>

      {/* 6. Deep Expertise in AI/ML Use Cases - BLUE BACKGROUND */}
      <div id="expertise" className="section-blue">
        <UseCasesSection />
      </div>

      {/* 7. Experts from Top Colleges (Soul AI) */}
      <CollegeLogosSoulAI />

      {/* 8. FAQ Section - BLUE BACKGROUND */}
      <div id="faq" className="section-blue">
        <FAQV2 />
      </div>

      {/* 9. Contact */}
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