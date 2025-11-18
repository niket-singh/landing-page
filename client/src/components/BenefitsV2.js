import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './BenefitsV2.css';

const BenefitsV2 = () => {
  const [ref1, isVisible1] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();

  return (
    <section id="benefits" className="benefits-v2">
      <div className="container-v2">
        {/* Section Header */}
        <div className="section-header-v2">
          <div className="section-badge">
            <span className="badge-icon">🚀</span>
            <span>For Talent</span>
          </div>
          <h2 className="section-title-v2">
            Why Top Engineers
            <span className="gradient-text-v2"> Choose Adzzat</span>
          </h2>
          <p className="section-subtitle-v2">
            Join 500+ professionals from IITs, NITs, and IIITs building the future of AI.
            Grow your career while working on cutting-edge projects.
          </p>
        </div>

        {/* Benefits Grid */}
        <div ref={ref1} className={`benefits-grid ${isVisible1 ? 'visible' : ''}`}>

          {/* Benefit 1 - Learning */}
          <div className="benefit-card glass-card">
            <div className="benefit-icon gradient-purple">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 22L16 28L28 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16L16 22L28 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Learning & Development</h3>
            <p>Advance your technical career with structured training in AI workflows, LLMs, agent testing, data pipelines, and software engineering—designed by industry experts from top institutes.</p>

            <div className="benefit-features">
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Hands-on training for production-level AI tasks</span>
              </div>
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Access to in-house learning modules & SOPs</span>
              </div>
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Mentorship from IIT/NIT faculty & industry experts</span>
              </div>
            </div>
          </div>

          {/* Benefit 2 - Flexibility */}
          <div className="benefit-card glass-card">
            <div className="benefit-icon gradient-pink">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2"/>
                <path d="M16 8V16L21 19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Flexible Work, Global Impact</h3>
            <p>Work remotely from anywhere in India while contributing to mission-critical AI development for global startups, research labs, and Fortune 500 companies.</p>

            <div className="benefit-features">
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Choose your workload & schedule</span>
              </div>
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Earn while you learn</span>
              </div>
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>No relocation required</span>
              </div>
            </div>
          </div>

          {/* Benefit 3 - Payment */}
          <div className="benefit-card glass-card">
            <div className="benefit-icon gradient-green">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="8" width="24" height="16" rx="2" stroke="white" strokeWidth="2"/>
                <path d="M4 14H28" stroke="white" strokeWidth="2"/>
                <circle cx="10" cy="19" r="1.5" fill="white"/>
              </svg>
            </div>
            <h3>Reliable Payouts</h3>
            <p>Earn competitive rates for every hour or task — with seamless bi-weekly or monthly payments directly into your account. No delays, no hassle.</p>

            <div className="benefit-features">
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Transparent hourly/task-based pricing</span>
              </div>
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Bi-weekly or monthly payment cycles</span>
              </div>
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Direct bank transfers</span>
              </div>
            </div>
          </div>

          {/* Benefit 4 - Opportunities */}
          <div className="benefit-card glass-card">
            <div className="benefit-icon gradient-blue">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" fill="white"/>
              </svg>
            </div>
            <h3>Career Advancement</h3>
            <p>Level up your career with referrals, top-tier portfolio projects, mentorship, and opportunities to work with teams from Silicon Valley, Europe, and APAC.</p>

            <div className="benefit-features">
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Pathway to full-time roles</span>
              </div>
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Real-world experience shipped to production</span>
              </div>
              <div className="feature-item-sm">
                <span className="check-icon-sm">✓</span>
                <span>Portfolio-worthy projects</span>
              </div>
            </div>
          </div>

          {/* Benefit 5 - Community */}
          <div className="benefit-card glass-card wide-benefit">
            <div className="benefit-wide-content">
              <div className="benefit-wide-left">
                <div className="benefit-icon gradient-orange">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
                    <circle cx="20" cy="10" r="3" stroke="white" strokeWidth="2"/>
                    <circle cx="16" cy="20" r="3" stroke="white" strokeWidth="2"/>
                    <path d="M14 12L12 17M18 12L20 17" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3>Elite Community</h3>
                  <p>Join a curated network of engineers, researchers, and analysts from IITs, NITs, IIITs, and other top institutions — working on cutting-edge AI products.</p>
                </div>
              </div>
              <div className="benefit-wide-right">
                <div className="community-stats">
                  <div className="stat-item-benefit">
                    <span className="stat-value-benefit">500+</span>
                    <span className="stat-label-benefit">Active Professionals</span>
                  </div>
                  <div className="stat-item-benefit">
                    <span className="stat-value-benefit">Top 1%</span>
                    <span className="stat-label-benefit">Talent Only</span>
                  </div>
                  <div className="stat-item-benefit">
                    <span className="stat-value-benefit">Global</span>
                    <span className="stat-label-benefit">Project Teams</span>
                  </div>
                </div>
                <div className="community-perks">
                  <span className="perk-tag">Work with ex-Google, ex-Meta, ex-OpenAI talent</span>
                  <span className="perk-tag">Private Discord/Slack community</span>
                  <span className="perk-tag">AMA sessions with AI leaders</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ref2} className={`benefits-cta ${isVisible2 ? 'visible' : ''}`}>
          <div className="cta-glass-card">
            <div className="cta-content-left">
              <h3>Ready to Join India's Next-Gen AI Workforce?</h3>
              <p>Be part of a community building the future of artificial intelligence. Apply once, work on multiple cutting-edge projects.</p>
            </div>
            <div className="cta-content-right">
              <button className="btn-primary-v2 btn-large">
                <span>Apply Now</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="cta-note">Application takes ~5 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsV2;
