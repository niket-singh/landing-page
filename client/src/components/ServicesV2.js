import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/MASTER_THEME.css';

const ServicesV2 = ({ openContactModal }) => {
  const [ref, isVisible] = useIntersectionObserver();

  const services = [
    {
      icon: "⚡",
      title: "Hire Talent",
      desc: "On-demand access to pre-vetted AI engineers, researchers, and annotators from top institutes (IITs, NITs)."
    },
    {
      icon: "🎯",
      title: "LLM Evaluation",
      desc: "Rigorous human evaluation of your models (RLHF) to ensure accuracy, safety, and alignment before deployment."
    },
    {
      icon: "📊",
      title: "Dataset Creation",
      desc: "Custom, high-quality datasets for fine-tuning. From code generation to complex reasoning tasks."
    },
    {
      icon: "🔍",
      title: "Red Teaming",
      desc: "Adversarial testing to find vulnerabilities and hallucinations in your AI systems."
    }
  ];

  return (
    <section className="section-white" style={{ position: 'relative' }}>
      <div className="container-v2">
        <div className="section-header">
          <div className="section-badge">Our Expertise</div>
          <h2 className="section-title">
            Comprehensive <span className="gradient-text-blue">AI Services</span>
          </h2>
          <p className="section-subtitle">
            End-to-end support for your generative AI scaling journey.
          </p>
        </div>

        <div ref={ref} className="deccan-grid" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease'
        }}>
          {services.map((service, index) => (
            <div key={index} className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                width: '50px', height: '50px', borderRadius: '12px',
                background: 'var(--blue-50)', color: 'var(--blue-600)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button className="btn-premium-blue" onClick={openContactModal}>
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesV2;
