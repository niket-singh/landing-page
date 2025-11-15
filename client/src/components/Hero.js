import React, { useRef, useEffect } from 'react';
import { useParticles } from '../hooks/useParticles';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  useParticles(canvasRef);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHow = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <canvas ref={canvasRef} id="hero-canvas"></canvas>
        <div className="gradient-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Growing & Profitable
          </div>
          <h1 className="hero-title">
            Elite Talent Meets
            <span className="gradient-text">Enterprise AI Solutions</span>
          </h1>
          <p className="hero-subtitle">
            The only platform combining vetted talent marketplace with enterprise-grade
            LLM evaluation and dataset services. Trusted by innovative companies to scale their AI operations.
          </p>
          <div className="hero-cta">
            <button onClick={scrollToContact} className="btn-primary btn-large">
              <span>Start Building</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={scrollToHow} className="btn-secondary btn-large">
              Learn More
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Tasks Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.8%</div>
              <div className="stat-label">Quality Score</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">🎯</div>
            <div className="card-text">AI-Powered Matching</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">⚡</div>
            <div className="card-text">Enterprise Scale</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🔒</div>
            <div className="card-text">Vetted Talent</div>
          </div>
          <div className="sphere-container">
            <div className="sphere"></div>
            <div className="sphere-ring ring-1"></div>
            <div className="sphere-ring ring-2"></div>
            <div className="sphere-ring ring-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
