import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Services.css';

const Services = () => {
  const [ref1, isVisible1] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Comprehensive AI Solutions</h2>
          <p className="section-subtitle">From talent acquisition to enterprise AI operations, we've got you covered</p>
        </div>

        <div className="services-grid">
          <div ref={ref1} className={`service-card ${isVisible1 ? 'visible' : ''}`}>
            <div className="card-glow"></div>
            <div className="service-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="5" y="5" width="30" height="30" rx="6" stroke="url(#gradient1)" strokeWidth="2"/>
                <path d="M15 20L18 23L25 16" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="gradient1" x1="5" y1="5" x2="35" y2="35">
                    <stop offset="0%" stopColor="#667eea"/>
                    <stop offset="100%" stopColor="#764ba2"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3>For Companies</h3>
            <p>Access pre-vetted talent and enterprise-grade AI services</p>
            <ul className="feature-list">
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>Vetted Talent Pool</strong>
                  <p>AI-screened candidates with proven track records</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>LLM Evaluation Services</strong>
                  <p>Comprehensive testing and quality assurance for AI models</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>Dataset Creation & Management</strong>
                  <p>High-quality labeled datasets for training and evaluation</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>Scalable Operations</strong>
                  <p>From pilot projects to enterprise-scale deployments</p>
                </div>
              </li>
            </ul>
          </div>

          <div ref={ref2} className={`service-card ${isVisible2 ? 'visible' : ''}`}>
            <div className="card-glow"></div>
            <div className="service-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="15" stroke="url(#gradient2)" strokeWidth="2"/>
                <path d="M20 13V20L25 25" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient2" x1="5" y1="5" x2="35" y2="35">
                    <stop offset="0%" stopColor="#f093fb"/>
                    <stop offset="100%" stopColor="#f5576c"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3>For Talent</h3>
            <p>Join our elite network and work on cutting-edge AI projects</p>
            <ul className="feature-list">
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>AI-Powered Vetting</strong>
                  <p>Resume parsing, coding tests, and AI interviews</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>Premium Projects</strong>
                  <p>Work with innovative companies on impactful projects</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>Flexible Work</strong>
                  <p>Remote opportunities with competitive compensation</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>Skill Development</strong>
                  <p>Grow your expertise in AI and machine learning</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
