import React, { useState } from 'react';
import '../styles/MASTER_THEME.css';

const FAQV2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: "How do you vet your talent?", a: "We have a rigorous 3-step process: Technical assessment, Domain expertise interview, and a Trial project. Only top 1% of applicants from institutes like IITs and NITs make the cut." },
    { q: "Can we hire for short-term projects?", a: "Yes! Adzzat is designed for flexibility. You can hire talent for a 2-week annotation sprint or a 6-month long LLM evaluation project." },
    { q: "How does the pricing model work?", a: "We offer transparent hourly rates or fixed-price task-based billing depending on the nature of your project. No hidden platform fees." },
    { q: "Do you sign NDAs?", a: "Absolutely. Data security is our priority. All talent signs strict NDAs, and we are happy to sign an enterprise-level NDA with your organization." }
  ];

  return (
    <section className="section-white">
      <div className="container-v2" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <h2 className="section-title">Frequently Asked <span className="gradient-text-blue">Questions</span></h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card" style={{ padding: '0', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
              <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600', margin: 0 }}>{faq.q}</h4>
                <span style={{
                  transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s',
                  color: 'var(--blue-500)', fontSize: '1.5rem'
                }}>↓</span>
              </div>
              <div style={{
                height: activeIndex === index ? 'auto' : '0',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <p style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-secondary)', marginTop: '-0.5rem' }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQV2;
