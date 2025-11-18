import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ImpactSectionV2.css';

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const ImpactSectionV2 = () => {
  const [ref1, isVisible1] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();

  const impactMetrics = [
    {
      value: "500+",
      label: "Elite Professionals",
      description: "From IITs, NITs, IIITs",
      gradient: "gradient-purple"
    },
    {
      value: "10k+",
      label: "Tasks Completed",
      description: "Production-grade quality",
      gradient: "gradient-pink"
    },
    {
      value: "99.8%",
      label: "Quality Score",
      description: "Consistently excellent",
      gradient: "gradient-blue"
    },
    {
      value: "24h",
      label: "Avg. Response",
      description: "Fast turnaround time",
      gradient: "gradient-green"
    }
  ];

  const talentProfiles = [
    {
      initial: "A",
      institution: "IIT Delhi",
      specialization: "NLP Engineer",
      gradient: "gradient-purple"
    },
    {
      initial: "R",
      institution: "NIT Trichy",
      specialization: "ML Researcher",
      gradient: "gradient-pink"
    },
    {
      initial: "S",
      institution: "IIIT Hyderabad",
      specialization: "Data Scientist",
      gradient: "gradient-blue"
    },
    {
      initial: "P",
      institution: "IIT Bombay",
      specialization: "AI Engineer",
      gradient: "gradient-green"
    },
    {
      initial: "K",
      institution: "IIT Madras",
      specialization: "CV Specialist",
      gradient: "gradient-orange"
    },
    {
      initial: "M",
      institution: "NIT Karnataka",
      specialization: "Prompt Engineer",
      gradient: "gradient-purple"
    },
    {
      initial: "D",
      institution: "BITS Pilani",
      specialization: "LLM Evaluator",
      gradient: "gradient-pink"
    },
    {
      initial: "V",
      institution: "IIT Kanpur",
      specialization: "Research Analyst",
      gradient: "gradient-blue"
    }
  ];

  return (
    <section id="impact" className="impact-v2">
      <div className="container-v2">
        {/* Main Punchline */}
        <div ref={ref1} className={`impact-hero ${isVisible1 ? 'visible' : ''}`}>
          <div className="impact-badge">
            <span className="badge-sparkle">✨</span>
            <span>Our Impact</span>
          </div>
          <h2 className="impact-title">
            Exceptional Humans.
            <br />
            <span className="gradient-text-v2">Exceptional AI.</span>
          </h2>
          <p className="impact-subtitle">
            Your AI models are only as intelligent as the talent behind them.
            We bring you India's top 1% — engineers, researchers, and evaluators
            from premier institutes building the future of artificial intelligence.
          </p>
        </div>

        {/* Impact Metrics */}
        <div ref={ref2} className={`impact-metrics ${isVisible2 ? 'visible' : ''}`}>
          {impactMetrics.map((metric, index) => (
            <div key={index} className="metric-card glass-card">
              <div className={`metric-icon ${metric.gradient}`}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 4L18 12L26 14L20 20L22 28L14 24L6 28L8 20L2 14L10 12L14 4Z" fill="white"/>
                </svg>
              </div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-description">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Talent Showcase */}
        <div className="talent-showcase">
          <div className="showcase-header">
            <h3>Meet Our Elite Network</h3>
            <p>Real professionals from top institutions working on cutting-edge AI projects</p>
          </div>

          <div className="talent-grid">
            {talentProfiles.map((profile, index) => (
              <div
                key={index}
                className="talent-profile-card glass-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`profile-avatar ${profile.gradient}`}>
                  <span>{profile.initial}</span>
                </div>
                <div className="profile-info">
                  <div className="profile-institution">{profile.institution}</div>
                  <div className="profile-specialization">{profile.specialization}</div>
                </div>
                <div className="profile-badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 8L7 10L11 6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Verified</span>
                </div>
              </div>
            ))}
          </div>

          {/* Talent Stats */}
          <div className="talent-stats">
            <div className="stat-item">
              <div className="stat-icon gradient-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 7L12 12L20 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 17L12 22L20 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 12L12 17L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">Top 1%</div>
                <div className="stat-text">Acceptance Rate</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon gradient-pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2"/>
                  <path d="M6 21C6 17 8 15 12 15C16 15 18 17 18 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">IITs/NITs</div>
                <div className="stat-text">Premier Institutes</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon gradient-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="white"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">Global</div>
                <div className="stat-text">Project Experience</div>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon gradient-green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="5" width="14" height="14" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="stat-content">
                <div className="stat-number">100%</div>
                <div className="stat-text">Vetted & Trained</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="impact-cta">
          <div className="cta-glass-box">
            <div className="cta-content-main">
              <h3>Ready to Work with India's Top AI Talent?</h3>
              <p>Join 50+ companies leveraging our elite network to build world-class AI products.</p>
            </div>
            <div className="cta-buttons">
              <button className="btn-primary-v2" onClick={scrollToContact}>
                <span>Hire Talent</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary-v2" onClick={scrollToContact}>
                <span>Join Our Network</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSectionV2;
