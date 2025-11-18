import React, { useRef } from 'react';
import { useParticles } from '../hooks/useParticles';
import './HeroV2.css';

const HeroV2 = () => {
  const canvasRef = useRef(null);
  useParticles(canvasRef);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-v2">
      <div className="hero-mesh-gradient"></div>
      <canvas ref={canvasRef} className="hero-canvas-bg"></canvas>

      <div className="container-v2">
        <div className="hero-content-v2-clean">
          {/* Main Headline - Centered */}
          <h1 className="hero-title-v2-clean">
            Where Elite Talent
            <br />
            <span className="gradient-text-v2">
              Powers AI Innovation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle-v2-clean">
            Connect with pre-vetted AI experts, scale your LLM evaluation,
            and build production-grade datasets — all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-v2-clean">
            <button onClick={scrollToContact} className="btn-primary-v2-clean">
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={scrollToContact} className="btn-secondary-v2-clean">
              <span>Contact Us</span>
            </button>
          </div>

          {/* Simple Trust Indicators */}
          <div className="hero-stats-v2-clean">
            <div className="stat-item-clean">
              <div className="stat-number-clean">99.8%</div>
              <div className="stat-label-clean">Quality Score</div>
            </div>
            <div className="stat-divider-clean"></div>
            <div className="stat-item-clean">
              <div className="stat-number-clean">10k+</div>
              <div className="stat-label-clean">Tasks Completed</div>
            </div>
            <div className="stat-divider-clean"></div>
            <div className="stat-item-clean">
              <div className="stat-number-clean">24h</div>
              <div className="stat-label-clean">Avg Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
