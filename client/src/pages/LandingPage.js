import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      
      {/* Trusted By Section */}
      <section className="trusted-by">
        <div className="container">
          <p className="trusted-label">Trusted by innovative companies</p>
          <div className="client-logo">
            <div className="logo-item">
              <span className="client-name">AfterQuery</span>
              <span className="client-badge">Active Partner</span>
            </div>
          </div>
        </div>
      </section>

      <Services />
      
      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Adzzat Works</h2>
            <p className="section-subtitle">A seamless process from start to finish</p>
          </div>

          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">01</div>
              <div className="timeline-content">
                <h3>Share Your Requirements</h3>
                <p>Tell us about your project needs, whether it's talent acquisition, LLM evaluation, or dataset creation</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">02</div>
              <div className="timeline-content">
                <h3>AI-Powered Matching</h3>
                <p>Our intelligent system matches you with the perfect talent or creates a customized project plan</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">03</div>
              <div className="timeline-content">
                <h3>Rigorous Vetting</h3>
                <p>Every candidate undergoes resume parsing, coding assessments, and AI-powered interviews</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">04</div>
              <div className="timeline-content">
                <h3>Deliver Excellence</h3>
                <p>Get high-quality results with continuous support and quality assurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Adzzat</h2>
            <p className="section-subtitle">The best of talent marketplaces and AI services, unified</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Proven Track Record</h3>
              <p>Already delivering exceptional results for AfterQuery with thousands of completed tasks</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Best-in-Class Vetting</h3>
              <p>Multi-stage AI-powered screening ensures only the top 1% of talent joins our network</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Enterprise Scale</h3>
              <p>From startups to enterprises, we scale seamlessly to meet your needs</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Quality Guaranteed</h3>
              <p>99.8% quality score with rigorous QA processes and continuous monitoring</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Comprehensive Services</h3>
              <p>Talent marketplace, LLM evals, and dataset work - all in one platform</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Innovation First</h3>
              <p>Using cutting-edge AI to match talent and evaluate models better than anyone else</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Transform Your AI Operations?</h2>
              <p>Join innovative companies already leveraging Adzzat's comprehensive AI solutions</p>
            </div>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary btn-large">
                Get Started Today
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">Adzzat</span>
              </div>
              <p>Elite talent meets enterprise AI solutions</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Talent Marketplace</a></li>
                  <li><a href="#services">LLM Evaluation</a></li>
                  <li><a href="#services">Dataset Services</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#why-us">Why Adzzat</a></li>
                  <li><a href="#how-it-works">How It Works</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Adzzat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
