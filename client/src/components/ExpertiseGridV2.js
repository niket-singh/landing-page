import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './ExpertiseGridV2.css';

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const ExpertiseGridV2 = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const expertiseAreas = [
    {
      category: "Agentic Workflows",
      description: "Multi-step agent testing, tool-use evaluation, and autonomous task completion workflows.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 22L16 28L28 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 16L16 22L28 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: "gradient-purple",
      size: "large"
    },
    {
      category: "Multi-Modal Annotations",
      description: "Image, video, audio, and text annotation for vision-language models and multi-modal AI.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="3" stroke="white" strokeWidth="2"/>
          <circle cx="11" cy="12" r="3" stroke="white" strokeWidth="2"/>
          <path d="M4 22L10 16L14 20L20 14L28 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: "gradient-pink",
      size: "medium"
    },
    {
      category: "Code-Gen & Debugging",
      description: "Python, JavaScript, SQL code generation, review, debugging, and test case creation.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M10 8L4 16L10 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 8L28 16L22 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 4L14 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: "gradient-blue",
      size: "medium"
    },
    {
      category: "Domain Specific SFT",
      description: "Supervised fine-tuning for healthcare, legal, finance, education, and technical domains.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L20 12L28 14L22 20L24 28L16 24L8 28L10 20L4 14L12 12L16 4Z" fill="white"/>
        </svg>
      ),
      gradient: "gradient-green",
      size: "medium"
    },
    {
      category: "Reasoning & Chain-of-Thought",
      description: "Complex multi-step reasoning, mathematical problem solving, and logical inference evaluation.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="8" cy="16" r="3" stroke="white" strokeWidth="2"/>
          <circle cx="24" cy="16" r="3" stroke="white" strokeWidth="2"/>
          <circle cx="16" cy="8" r="3" stroke="white" strokeWidth="2"/>
          <circle cx="16" cy="24" r="3" stroke="white" strokeWidth="2"/>
          <path d="M10.5 14.5L13.5 10.5M18.5 10.5L21.5 14.5M10.5 17.5L13.5 21.5M18.5 21.5L21.5 17.5" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      gradient: "gradient-orange",
      size: "medium"
    },
    {
      category: "Multi-Turn Conversational Alignment",
      description: "Dialog quality, coherence, context retention, and safety evaluation for chatbots and assistants.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M28 8H10C8.9 8 8 8.9 8 10V18C8 19.1 8.9 20 10 20H18L24 26V20H28C29.1 20 30 19.1 30 18V10C30 8.9 29.1 8 28 8Z" stroke="white" strokeWidth="2"/>
          <circle cx="14" cy="14" r="1.5" fill="white"/>
          <circle cx="19" cy="14" r="1.5" fill="white"/>
          <circle cx="24" cy="14" r="1.5" fill="white"/>
        </svg>
      ),
      gradient: "gradient-purple",
      size: "wide"
    },
    {
      category: "Text-To-SQL",
      description: "Natural language to database query translation, SQL validation, and query optimization.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="8" width="24" height="16" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M4 14H28M12 8V24M20 8V24" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      gradient: "gradient-pink",
      size: "medium"
    },
    {
      category: "RAG Training/Eval",
      description: "Retrieval-augmented generation pipeline testing, context relevance, and hallucination detection.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2"/>
          <path d="M18 18L26 26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 8V12M12 12V16M12 12H8M12 12H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: "gradient-blue",
      size: "medium"
    },
    {
      category: "Model & Data Evaluation",
      description: "Comprehensive LLM benchmarking, bias detection, safety testing, and dataset quality assessment.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="6" width="20" height="20" rx="2" stroke="white" strokeWidth="2"/>
          <path d="M12 16L15 19L21 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: "gradient-green",
      size: "medium"
    },
    {
      category: "Indic Language Work",
      description: "Hindi, Bengali, Tamil, Telugu, and other Indian language annotation, translation, and model evaluation.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 12C8 9.79 9.79 8 12 8H20C22.21 8 24 9.79 24 12V20C24 22.21 22.21 24 20 24H12C9.79 24 8 22.21 8 20V12Z" stroke="white" strokeWidth="2"/>
          <path d="M12 16H20M16 12V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      gradient: "gradient-orange",
      size: "large"
    }
  ];

  return (
    <section id="expertise" className="expertise-v2">
      <div className="container-v2">
        {/* Section Header */}
        <div className="section-header-v2">
          <div className="section-badge">
            <span className="badge-icon">🎯</span>
            <span>Our Expertise</span>
          </div>
          <h2 className="section-title-v2">
            AI/ML Use Cases
            <span className="gradient-text-v2"> We Master</span>
          </h2>
          <p className="section-subtitle-v2">
            From agentic workflows to multi-modal annotations, we handle the full spectrum
            of modern AI development — powered by India's top technical talent.
          </p>
        </div>

        {/* Expertise Grid */}
        <div ref={ref} className={`expertise-grid ${isVisible ? 'visible' : ''}`}>
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`expertise-card glass-card ${area.size}`}
            >
              <div className={`expertise-icon ${area.gradient}`}>
                {area.icon}
              </div>
              <div className="expertise-content">
                <h3>{area.category}</h3>
                <p>{area.description}</p>
              </div>
              <div className="expertise-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="expertise-cta">
          <div className="cta-box">
            <div className="cta-icon-group">
              <div className="cta-icon-item gradient-purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 16L12 20L20 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 12L12 16L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="cta-icon-item gradient-pink">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                  <circle cx="8" cy="9" r="2" stroke="white" strokeWidth="2"/>
                  <path d="M3 17L8 12L11 15L15 11L21 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="cta-icon-item gradient-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 6L4 12L8 18M16 6L20 12L16 18M14 3L10 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="cta-text">
              <h3>Don't see your use case?</h3>
              <p>We specialize in custom AI workflows. Schedule a call to discuss your unique requirements.</p>
            </div>
            <button className="btn-secondary-v2" onClick={scrollToContact}>
              <span>Schedule a Call</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGridV2;
