import React, { useState } from 'react';
import './FAQV2.css';

const FAQV2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Adzzat different?",
      answer: "We provide fully-trained AI engineers and evaluators — not just freelancers. We handle recruiting, training, quality assurance, and delivery end-to-end, so you get production-ready talent without the overhead."
    },
    {
      question: "What kind of talent do you offer?",
      answer: "We work with vetted engineers, evaluators, and data specialists from top Indian institutes like IITs, NITs, and IIITs. Every professional goes through rigorous technical screening and AI-powered interviews."
    },
    {
      question: "How do you ensure quality?",
      answer: "Every task goes through structured training, evaluation, QA checks, and ongoing performance monitoring. We maintain a 99.8% quality score through our proprietary quality control system."
    },
    {
      question: "Can you handle specialized or technical workflows?",
      answer: "Absolutely. We support LLM evaluations, agent testing, coding tasks, dataset creation, prompt engineering, and domain-specific workflows. Our team has experience with all major AI/ML use cases."
    },
    {
      question: "How quickly can we get started?",
      answer: "Most teams are ready in under a week, depending on scale and workflow complexity. We have a pool of 500+ pre-vetted professionals ready to be staffed immediately."
    },
    {
      question: "Do we need to manage the team?",
      answer: "No — we fully manage recruiting, training, operations, and quality assurance so you only focus on results. Think of us as your extended AI operations team."
    },
    {
      question: "How does pricing work?",
      answer: "Flexible pricing models: hourly rates, per-task pricing, or dedicated team packages — all inclusive of management, training, and QA. Custom pricing available for enterprise needs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-v2">
      <div className="container-v2">
        <div className="faq-layout">
          {/* Left Side - Header */}
          <div className="faq-header">
            <div className="section-badge">
              <span className="badge-icon">❓</span>
              <span>FAQ</span>
            </div>
            <h2 className="section-title-v2">
              Frequently Asked
              <span className="gradient-text-v2"> Questions</span>
            </h2>
            <p className="section-subtitle-v2">
              Everything you need to know about working with Adzzat.
              Can't find what you're looking for? Reach out to our team.
            </p>
            <button className="btn-secondary-v2">
              <span>Contact Us</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right Side - FAQ List */}
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQV2;
