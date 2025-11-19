import React from 'react';
import '../styles/MASTER_THEME.css';

const ExpertiseDeccan = () => {
  const industries = [
    {
      title: "Software",
      desc: "Streamline code generation, automate bug fixes, and create technical documentation from simple descriptions. Go from ideas to prototypes at the speed of light."
    },
    {
      title: "Finance",
      desc: "Generate personalized financial reports, conduct advanced risk analysis, create fraud detection scenarios, talk to your streams of data with natural language."
    },
    {
      title: "General Purpose AI",
      desc: "Enable your LLM's multi-modal reasoning abilities, and get closer to AGI with robust general purpose datasets."
    },
    {
      title: "EdTech",
      desc: "Personalize learning content, such as lesson plans, quizzes, and interactive assignments tailored to student performance."
    }
  ];

  const genAiUseCases = [
    { title: "Agentic Workflows", desc: "Interoperable, fault-tolerant LLM workflows to execute highly-complex functions with minimal latency." },
    { title: "Multi-Modal SFT", desc: "Supervised fine-tuning across text, image, audio, and video to unlock accurate, context-aware multimodal AI." },
    { title: "Code-Generation & Debugging", desc: "Train models to write and debug code from natural language prompts, accelerating software development." },
    { title: "Text-To-SQL", desc: "Instantly convert natural language queries into precise, production-ready SQL statements for any database." },
    { title: "Model Evaluation", desc: "Assess and compare model performance with robust validation strategies and business-aligned metrics." },
    { title: "RAG", desc: "Enhance generative AI with up-to-date, fact-grounded responses by integrating external data retrieval." },
    { title: "RLHF", desc: "Optimize AI models with direct human feedback, aligning outputs with nuanced human preferences and goals." }
  ];

  return (
    <div className="expertise-section">
      
      {/* SECTION 1: Industries */}
      <section className="section-white">
        <div className="container-v2">
          <div className="section-header">
            <h2 className="section-title">Enable disruptive tech <br/><span className="gradient-text-blue">across industries</span></h2>
            <p className="section-subtitle">Powering the next generation of vertical AI applications.</p>
          </div>
          <div className="deccan-grid">
            {industries.map((item, index) => (
              <div key={index} className="deccan-card glass-card">
                <div style={{ color: 'var(--blue-500)', fontSize: '2rem', marginBottom: '1rem' }}>✦</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: GenAI Use Cases (Dark Blue Theme) */}
      <section className="section-dark-blue" style={{ marginTop: '0' }}>
        <div className="container-v2">
          <div className="section-header">
            <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
              Capabilities
            </div>
            <h2 className="section-title" style={{ color: 'white' }}>
              Deep Expertise in <br/>
              <span style={{ color: '#60a5fa' }}>All GenAI Use Cases</span>
            </h2>
          </div>
          
          <div className="deccan-grid">
            {genAiUseCases.map((item, index) => (
              <div key={index} className="deccan-card" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#60a5fa', fontSize: '1.5rem', marginBottom: '1rem' }}>⚡</div>
                <h3 style={{ color: 'white' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExpertiseDeccan;