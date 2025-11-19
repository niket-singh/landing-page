import React, { useEffect, useRef } from 'react';
import '../styles/UseCasesSection.css';

const UseCasesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-slide');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const useCases = [
    {
      title: 'Agentic Workflows',
      description: 'Build intelligent multi-agent systems with coordinated autonomous actions and decision-making capabilities.',
      icon: '🤖'
    },
    {
      title: 'Multi-Modal Annotations',
      description: 'Expert annotation services for text, images, video, and audio data to train sophisticated AI models.',
      icon: '🎨'
    },
    {
      title: 'Code-Gen & Debugging',
      description: 'Generate high-quality code and identify bugs with AI-powered development assistance and optimization.',
      icon: '💻'
    },
    {
      title: 'Domain Specific SFT',
      description: 'Supervised Fine-Tuning for specialized domains including medical, legal, finance, and technical fields.',
      icon: '🎯'
    },
    {
      title: 'Reasoning',
      description: 'Advanced logical reasoning, mathematical problem-solving, and complex decision-making capabilities.',
      icon: '🧠'
    },
    {
      title: 'Multi-Turn Conversational Alignment',
      description: 'Train models for natural, contextual dialogue with sophisticated conversation flow management.',
      icon: '💬'
    },
    {
      title: 'Text-To-SQL',
      description: 'Convert natural language queries into optimized SQL statements for database interaction.',
      icon: '🗄️'
    },
    {
      title: 'RAG Training / Eval',
      description: 'Retrieval-Augmented Generation training, evaluation, and optimization for accurate information retrieval.',
      icon: '📚'
    },
    {
      title: 'Model & Data Evaluation',
      description: 'Comprehensive evaluation frameworks for model performance, bias detection, and data quality assessment.',
      icon: '📊'
    },
    {
      title: 'Indic Language Work',
      description: 'Specialized expertise in Hindi, Tamil, Telugu, Bengali, and other Indian languages for localized AI.',
      icon: '🌐'
    },
    {
      title: 'RLHF & Red Teaming',
      description: 'Reinforcement Learning from Human Feedback and adversarial testing for model safety and alignment.',
      icon: '🛡️'
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI implementations for unique business challenges and specialized industry requirements.',
      icon: '⚡'
    }
  ];

  return (
    <section className="use-cases-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header fade-slide">
          <h2 className="section-heading">Deep Expertise in All AI/ML Use Cases</h2>
          <p className="section-subheading">
            From data annotation to model evaluation, our global network of experts covers
            every aspect of AI development with precision and domain knowledge.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <div key={index} className="use-case-card fade-slide">
              <div className="card-icon">{useCase.icon}</div>
              <h3 className="card-title">{useCase.title}</h3>
              <p className="card-description">{useCase.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="use-cases-cta fade-slide">
          <h3>Don't see your use case?</h3>
          <p>We work on custom AI projects across all domains. Let's discuss your specific needs.</p>
          <button className="button-primary">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
