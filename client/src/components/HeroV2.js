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
        <div className="hero-content-v2">
          {/* Badge */}
          <div className="hero-badge-v2">
            <span className="badge-sparkle">✨</span>
            <span>Trusted by 50+ companies</span>
            <span className="badge-indicator"></span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title-v2">
            Where Elite Talent
            <br />
            <span className="gradient-text-v2">
              Powers AI Innovation
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle-v2">
            Connect with pre-vetted AI experts, scale your LLM evaluation,
            and build production-grade datasets — all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-v2">
            <button onClick={scrollToContact} className="btn-primary-v2 btn-glow">
              <span>Get Started Free</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary-v2">
              <span>Watch Demo</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 4L15 10L6 16V4Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust-v2">
            <div className="trust-item">
              <div className="trust-number">99.8%</div>
              <div className="trust-label">Quality Score</div>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <div className="trust-number">10k+</div>
              <div className="trust-label">Tasks Completed</div>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <div className="trust-number">24h</div>
              <div className="trust-label">Avg Response</div>
            </div>
          </div>
        </div>

        {/* Hero Visual - Bento Grid */}
        <div className="hero-visual-v2">
          <div className="bento-grid">
            <div className="bento-card bento-large glass-effect">
              <div className="bento-content">
                <div className="bento-icon gradient-bg-1">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" fill="white"/>
                  </svg>
                </div>
                <h3>AI-Powered Matching</h3>
                <p>Intelligent algorithms match you with the perfect talent in minutes</p>
                <div className="bento-metric">
                  <span className="metric-value">95%</span>
                  <span className="metric-label">Match Accuracy</span>
                </div>
              </div>
              <div className="bento-decoration"></div>
            </div>

            <div className="bento-card bento-medium glass-effect">
              <div className="bento-content">
                <div className="bento-icon gradient-bg-2">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="4" y="4" width="20" height="20" rx="4" stroke="white" strokeWidth="2"/>
                    <path d="M10 14L13 17L19 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Vetted Experts</h4>
                <p>Top 1% talent only</p>
              </div>
            </div>

            <div className="bento-card bento-small glass-effect">
              <div className="bento-stat">
                <div className="stat-circle">
                  <svg className="stat-ring" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" />
                    <circle cx="50" cy="50" r="45" className="stat-progress" />
                  </svg>
                  <span className="stat-value">99%</span>
                </div>
                <p>Satisfaction Rate</p>
              </div>
            </div>

            <div className="bento-card bento-wide glass-effect">
              <div className="bento-content horizontal">
                <div className="bento-icon gradient-bg-3">
                  ⚡
                </div>
                <div>
                  <h4>Enterprise Scale</h4>
                  <p>From startups to Fortune 500</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="floating-element float-1">
            <div className="mini-card glass-effect">
              <span className="mini-icon">🚀</span>
              <span className="mini-text">Fast Delivery</span>
            </div>
          </div>
          <div className="floating-element float-2">
            <div className="mini-card glass-effect">
              <span className="mini-icon">🎯</span>
              <span className="mini-text">100% Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroV2;
