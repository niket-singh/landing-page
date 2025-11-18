import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './HowItWorksV2.css';

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const HowItWorksV2 = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const steps = [
    {
      number: "01",
      title: "Application",
      description: "Submit your profile once, and we'll match you to opportunities based on your skills and interests.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4V28M4 16H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="3" fill="white"/>
        </svg>
      ),
      features: [
        "Quick 5-minute application",
        "One-time submission",
        "Skills-based matching"
      ]
    },
    {
      number: "02",
      title: "Screening Interview",
      description: "A short conversation or task-based interview to verify foundational skills and communication needed for global AI work.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="12" r="5" stroke="white" strokeWidth="2"/>
          <path d="M8 28C8 23 11 20 16 20C21 20 24 23 24 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      features: [
        "30-minute conversation",
        "Communication assessment",
        "Culture fit evaluation"
      ]
    },
    {
      number: "03",
      title: "Skill-Specific Evaluation",
      description: "Role-based assessments or project simulations depending on the workflow (e.g., LLM evals, prompt engineering, coding tasks, dataset work).",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="6" width="20" height="20" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M12 16L15 19L21 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Designed by AI experts",
        "Real-world production tasks",
        "Training + feedback included"
      ]
    },
    {
      number: "04",
      title: "Become a Top Contributor",
      description: "Join our elite pool of AI workforce talent, get staffed on projects, and start earning while working with global product teams.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" fill="white"/>
        </svg>
      ),
      features: [
        "Grow into lead roles",
        "Multi-month recurring work",
        "Access bonuses & higher-tier projects"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-v2">
      <div className="container-v2">
        {/* Section Header */}
        <div className="section-header-v2">
          <div className="section-badge">
            <span className="badge-icon">🎯</span>
            <span>Process</span>
          </div>
          <h2 className="section-title-v2">
            How to Join
            <span className="gradient-text-v2"> Adzzat</span>
          </h2>
          <p className="section-subtitle-v2">
            A simple, transparent process to join India's top AI workforce.
            From application to earning in 4 clear steps.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className={`timeline-v2 ${isVisible ? 'visible' : ''}`}>
          {steps.map((step, index) => (
            <div key={index} className="timeline-step">
              <div className="step-line"></div>

              <div className="step-number-badge">
                <span>{step.number}</span>
              </div>

              <div className="step-card glass-card">
                <div className="step-icon gradient-purple">
                  {step.icon}
                </div>

                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  <ul className="step-features">
                    {step.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="check-sm">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="timeline-cta">
          <div className="cta-content">
            <h3>Ready to Get Started?</h3>
            <p>Join 500+ professionals already working on cutting-edge AI projects</p>
          </div>
          <button className="btn-primary-v2 btn-large" onClick={scrollToContact}>
            <span>Start Application</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksV2;
