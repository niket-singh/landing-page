import React from 'react';
import NavbarV2 from '../components/NavbarV2';
import HeroV2 from '../components/HeroV2';
import HeroWhiteBlue from '../components/HeroWhiteBlue';
import ServicesV2 from '../components/ServicesV2';
import HowItWorksV2 from '../components/HowItWorksV2';
import BenefitsV2 from '../components/BenefitsV2';
import ExpertiseGridV2 from '../components/ExpertiseGridV2';
import ImpactSectionV2 from '../components/ImpactSectionV2';
import CollegeLogos from '../components/CollegeLogos';
import CollegeLogosSoulAI from '../components/CollegeLogosSoulAI';
import FAQV2 from '../components/FAQV2';
import Contact from '../components/Contact';
import FloatingOrbs from '../components/FloatingOrbs';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Premium Floating Orbs Background */}
      <FloatingOrbs />

      {/* Modern Glassmorphism Navbar */}
      <NavbarV2 />

      {/* Hero Section - Clean & Simple */}
      {/* Toggle between HeroV2 (purple premium) or HeroWhiteBlue (clean blue) */}
      <HeroWhiteBlue />
      {/* <HeroV2 /> */}

      {/* Services Section - Glass Cards */}
      <ServicesV2 />

      {/* How It Works - Timeline */}
      <HowItWorksV2 />

      {/* Benefits - For Talent */}
      <BenefitsV2 />

      {/* Expertise Grid - AI/ML Use Cases */}
      <ExpertiseGridV2 />

      {/* Impact Section - Better Punchline + Talent Showcase */}
      <ImpactSectionV2 />

      {/* College Logos - Infinite Scroll Bands */}
      {/* Toggle between CollegeLogosSoulAI (Soul AI style) or CollegeLogos (original) */}
      <CollegeLogosSoulAI />
      {/* <CollegeLogos /> */}

      {/* FAQ Section - Interactive Accordion */}
      <FAQV2 />

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <footer className="footer-v2">
        <div className="container-v2">
          <div className="footer-content-v2">
            <div className="footer-brand-v2">
              <div className="footer-logo-v2">
                <span className="logo-text-v2">Adzzat</span>
              </div>
              <p className="footer-tagline">Exceptional Humans. Exceptional AI.</p>
              <p className="footer-stat">500+ professionals building the future of AI</p>
            </div>
            <div className="footer-links-v2">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Hire Talent</a></li>
                  <li><a href="#services">LLM Evaluation</a></li>
                  <li><a href="#services">Dataset Creation</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>For Talent</h4>
                <ul>
                  <li><a href="#benefits">Why Join</a></li>
                  <li><a href="#how-it-works">Application Process</a></li>
                  <li><a href="#benefits">Apply Now</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#expertise">Expertise</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom-v2">
            <p>&copy; 2024 Adzzat. All rights reserved.</p>
            <div className="footer-links-bottom">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
