import React, { useEffect, useRef } from 'react';
import './HeroDark.css';

const HeroDark = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-dark">
      <div className="hero-blob"></div>
      <div className="hero-content fade-slide" ref={contentRef}>
        <h1>Elite Talent Meets Enterprise AI Solutions</h1>
        <p>
          The only platform combining a vetted talent marketplace with enterprise-grade
          LLM evaluation and dataset services. Scale your AI operations with confidence.
        </p>
        <div className="hero-cta">
          <button className="button-primary" onClick={() => scrollTo('contact')}>
            Start Building
          </button>
          <button className="button-secondary" onClick={() => scrollTo('services')}>
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroDark;
