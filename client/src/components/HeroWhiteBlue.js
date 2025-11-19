import React from 'react';
import './HeroWhiteBlue.css';
import '../styles/MASTER_THEME.css';

const HeroWhiteBlue = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroImages = [
    "/assets/images/WhatsApp%20Image%202025-11-19%20at%2000.47.40.jpeg",
    "/assets/images/WhatsApp%20Image%202025-11-19%20at%2000.47.41%20(1).jpeg",
    "/assets/images/WhatsApp%20Image%202025-11-19%20at%2000.47.41%20(2).jpeg"
  ];

  return (
    <section className="hero-section">
      {/* Animated Background Blobs */}
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>

      <div className="container-v2">
        <div className="hero-container">
          
          {/* LEFT: Content */}
          <div className="hero-content-left">
            <div className="section-badge fade-in-up">
              <span style={{ marginRight: '8px' }}>✨</span>
              <span>Generative AI for Enterprises</span>
            </div>

            <h1 className="section-title fade-in-up delay-100" style={{ fontSize: '4rem' }}>
              Elite Talent Meets <br />
              <span className="gradient-text-blue">Enterprise AI Solutions</span>
            </h1>

            <p className="section-subtitle fade-in-up delay-200">
              The only platform combining a vetted talent marketplace with enterprise-grade 
              LLM evaluation and dataset services. Scale your AI operations with confidence.
            </p>

            <div className="hero-cta-group fade-in-up delay-300">
              <button onClick={() => scrollTo('contact')} className="btn-premium-blue">
                Start Building
              </button>
              <button onClick={() => scrollTo('services')} className="btn-explore-service">
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT: Image Masonry Grid */}
          <div className="hero-visual-desktop">
            <div className="hero-bg-decoration"></div>

            {/* Card 1: Main Tall */}
            <div className="masonry-card card-main glass-card">
              <img src={heroImages[0]} alt="AI Talent at Work" />
            </div>

            {/* Card 2: Top Right */}
            <div className="masonry-card card-top-right glass-card">
              <img src={heroImages[1]} alt="Team Collaboration" />
            </div>

            {/* Card 3: Bottom Right */}
            <div className="masonry-card card-bottom-right glass-card">
              <img src={heroImages[2]} alt="AI Workshop" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroWhiteBlue;