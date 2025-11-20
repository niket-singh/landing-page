import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import '../styles/MASTER_THEME.css';

const HowItWorksV2 = ({ openContactModal }) => {
  const [ref, isVisible] = useIntersectionObserver();

  const steps = [
    { num: "01", title: "Share Your Requirements", desc: "Tell us about your project needs, timeline, and the specific skills or datasets required." },
    { num: "02", title: "AI-Matching & Curating", desc: "Our algorithm matches you with the top 1% of domain experts from our pool of 500+ professionals." },
    { num: "03", title: "Kickoff & Execution", desc: "Work begins immediately with seamless integration into your existing workflows (Slack, Jira, GitHub)." },
    { num: "04", title: "Quality Assurance", desc: "Rigorous multi-layer QA process ensures every deliverable meets production standards." }
  ];

  return (
    <section className="section-dark-blue" style={{ padding: '6rem 0' }}>
      {/* Background Gradients */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(47,128,237,0.15) 0%, transparent 70%)' }}></div>
      </div>

      <div className="container-v2">
        <div className="section-header">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>Process</div>
          <h2 className="section-title" style={{ color: 'white' }}>
            How We <span style={{ color: '#60a5fa' }}>Deliver Excellence</span>
          </h2>
        </div>

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              position: 'relative',
              padding: '2rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: `${index * 100}ms`
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = '#60a5fa'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(255,255,255,0.1)', marginBottom: '1rem' }}>{step.num}</div>
              <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button className="btn-premium-blue" onClick={openContactModal} style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' }}>
            Start Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksV2;
