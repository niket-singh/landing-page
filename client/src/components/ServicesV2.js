import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ServicesV2.css';

const ServicesV2 = () => {
  const [ref1, isVisible1] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="services-v2">
      <div className="container-v2">
        {/* Section Header */}
        <div className="section-header-v2">
          <div className="section-badge">
            <span className="badge-icon">⚡</span>
            <span>Our Services</span>
          </div>
          <h2 className="section-title-v2">
            Everything You Need to
            <div className="gradient-text-v2"> Build AI Products</div>
          </h2>
          <p className="section-subtitle-v2">
            From talent acquisition to model evaluation, we provide end-to-end AI solutions
            that scale with your ambitions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid-v2">
          {/* Service Card 1 - For Companies */}
          <div ref={ref1} className={`service-card-v2 large-card ${isVisible1 ? 'visible' : ''}`}>
            <div className="card-glow-v2"></div>
            <div className="card-header-v2">
              <div className="service-icon-v2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L18 10L26 12L20 18L22 26L14 22L6 26L8 18L2 12L10 10L14 2Z" fill="#0A1538"/>
                </svg>
              </div>
              <div>
                <span className="card-tag">For Companies</span>
                <h3>Hire Pre-Vetted AI Talent</h3>
              </div>
            </div>

            <p className="card-description">
              Access a curated network of top 1% AI engineers, ML specialists, and data scientists.
              Every candidate undergoes rigorous technical screening and AI-powered interviews.
            </p>

            <div className="features-list-v2">
              <div className="feature-item-v2">
                <div className="feature-icon-check">✓</div>
                <div>
                  <strong>AI-Powered Matching</strong>
                  <p>Find the perfect fit in hours, not weeks</p>
                </div>
              </div>
              <div className="feature-item-v2">
                <div className="feature-icon-check">✓</div>
                <div>
                  <strong>Technical Vetting</strong>
                  <p>Resume parsing + coding tests + AI interviews</p>
                </div>
              </div>
              <div className="feature-item-v2">
                <div className="feature-icon-check">✓</div>
                <div>
                  <strong>Quality Guaranteed</strong>
                  <p>99.8% satisfaction rate with money-back guarantee</p>
                </div>
              </div>
            </div>

            <div className="card-stats-v2">
              <div className="stat-v2">
                <span className="stat-value-v2">500+</span>
                <span className="stat-label-v2">Vetted Experts</span>
              </div>
              <div className="stat-divider-v2"></div>
              <div className="stat-v2">
                <span className="stat-value-v2">48h</span>
                <span className="stat-label-v2">Avg Match Time</span>
              </div>
            </div>

            <button className="card-cta-v2" onClick={scrollToContact}>
              <span>Contact Us</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Service Card 2 - LLM Evaluation */}
          <div className={`service-card-v2 medium-card ${isVisible1 ? 'visible' : ''}`}>
            <div className="card-glow-v2"></div>
            <div className="card-header-v2">
              <div className="service-icon-v2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="4" y="4" width="20" height="20" rx="4" stroke="#0A1538" strokeWidth="2"/>
                  <path d="M9 14L12 17L19 10" stroke="#0A1538" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="card-tag">Enterprise AI</span>
                <h3>LLM Evaluation</h3>
              </div>
            </div>

            <p className="card-description">
              Comprehensive testing and quality assurance for your language models.
              Human-in-the-loop evaluation at scale.
            </p>

            <div className="features-compact-v2">
              <div className="feature-compact-v2">
                <span className="check-sm">✓</span>
                <span>Prompt testing & optimization</span>
              </div>
              <div className="feature-compact-v2">
                <span className="check-sm">✓</span>
                <span>Safety & bias detection</span>
              </div>
              <div className="feature-compact-v2">
                <span className="check-sm">✓</span>
                <span>Multi-language support</span>
              </div>
              <div className="feature-compact-v2">
                <span className="check-sm">✓</span>
                <span>Real-time monitoring</span>
              </div>
            </div>

            <div className="metric-highlight-v2">
              <span className="metric-big-v2">99.9%</span>
              <span className="metric-text-v2">Accuracy Rate</span>
            </div>

            <button className="card-cta-v2" onClick={scrollToContact}>
              <span>Contact Us</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Service Card 3 - Dataset Creation */}
          <div className={`service-card-v2 medium-card ${isVisible1 ? 'visible' : ''}`}>
            <div className="card-glow-v2"></div>
            <div className="card-header-v2">
              <div className="service-icon-v2">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 7H24M4 14H24M4 21H24" stroke="#0A1538" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="card-tag">Data Services</span>
                <h3>Dataset Creation</h3>
              </div>
            </div>

            <p className="card-description">
              High-quality labeled datasets for training, fine-tuning, and evaluation.
              Custom annotation workflows at enterprise scale.
            </p>

            <div className="features-compact-v2">
              <div className="feature-compact-v2">
                <span className="check-sm">✓</span>
                <span>Image & video annotation</span>
              </div>
              <div className="feature-compact-v2">
                <span className="check-sm">✓</span>
                <span>Text labeling & NER</span>
              </div>
              <div className="feature-compact-v2">
                <span className="check-sm">✓</span>
                <span>Audio transcription</span>
              </div>
              <div className="feature-compact-v2">
                <span className="check-sm">✓</span>
                <span>Custom taxonomies</span>
              </div>
            </div>

            <div className="metric-highlight-v2">
              <span className="metric-big-v2">1M+</span>
              <span className="metric-text-v2">Data Points Labeled</span>
            </div>

            <button className="card-cta-v2" onClick={scrollToContact}>
              <span>Contact Us</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Service Card 4 - For Talent */}
          <div ref={ref2} className={`service-card-v2 wide-card ${isVisible2 ? 'visible' : ''}`}>
            <div className="card-glow-v2"></div>
            <div className="wide-card-content">
              <div className="wide-card-left">
                <div className="service-icon-v2">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="9" r="4" stroke="#0A1538" strokeWidth="2"/>
                    <path d="M7 23C7 19 10 16 14 16C18 16 21 19 21 23" stroke="#0A1538" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className="card-tag">For Talent</span>
                  <h3>Join Our Elite Network</h3>
                  <p className="card-description">
                    Work on cutting-edge AI projects with top companies. Competitive pay, flexible hours, and skill growth opportunities.
                  </p>
                </div>
              </div>
              <div className="wide-card-right">
                <div className="perks-grid">
                  <div className="perk-item">
                    <span className="perk-icon">💰</span>
                    <span>Top Pay</span>
                  </div>
                  <div className="perk-item">
                    <span className="perk-icon">🏠</span>
                    <span>Remote</span>
                  </div>
                  <div className="perk-item">
                    <span className="perk-icon">⚡</span>
                    <span>Fast Payouts</span>
                  </div>
                  <div className="perk-item">
                    <span className="perk-icon">📈</span>
                    <span>Skill Growth</span>
                  </div>
                </div>
                <button className="card-cta-v2 cta-secondary" onClick={scrollToContact}>
                  <span>Contact Us</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="services-bottom-cta">
          <div className="bottom-cta-content">
            <h3>Need a custom solution?</h3>
            <p>Let's discuss how we can help your specific use case</p>
          </div>
          <button className="btn-primary-v2" onClick={scrollToContact}>
            <span>Contact Us</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesV2;
