import React, { useEffect, useState } from 'react';
import './HeroWhiteBlue.css';

const HeroWhiteBlue = () => {
  const [stats, setStats] = useState({ quality: 0, tasks: 0, response: 0 });

  useEffect(() => {
    const animateCounter = (target, setter, duration = 1800) => {
      const start = 0;
      const startTime = Date.now();

      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        setter(current);

        if (progress < 1) requestAnimationFrame(updateCounter);
      };
      requestAnimationFrame(updateCounter);
    };

    setTimeout(() => {
      animateCounter(99.8, (val) => setStats(prev => ({ ...prev, quality: val })));
      setTimeout(() => animateCounter(10000, (val) => setStats(prev => ({ ...prev, tasks: val }))), 150);
      setTimeout(() => animateCounter(24, (val) => setStats(prev => ({ ...prev, response: val }))), 300);
    }, 1000);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-white-blue">
      <div className="hero-blobs-blue">
        <div className="hero-blob-blue hero-blob-blue-1"></div>
        <div className="hero-blob-blue hero-blob-blue-2"></div>
      </div>
      <div className="hero-grid-pattern"></div>

      <div className="container-v2">
        <div className="hero-content-blue">
          <div className="hero-badge-blue">
            <span className="badge-dot-blue"></span>
            <span className="badge-text-blue">Trusted by 500+ Companies</span>
          </div>

          <h1 className="hero-title-blue">
            Where Elite Talent
            <br />
            <span className="gradient-blue-text">Powers AI Innovation</span>
          </h1>

          <p className="hero-subtitle-blue">
            Connect with pre-vetted AI experts, scale your LLM evaluation,
            and build production-grade datasets — all in one platform.
          </p>

          <div className="hero-cta-blue">
            <button onClick={() => scrollTo('contact')} className="btn-primary-blue">
              <span>Get Started</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={() => scrollTo('services')} className="btn-secondary-blue">
              <span>Learn More</span>
            </button>
          </div>

          <div className="hero-stats-blue">
            <div className="stat-item-blue">
              <div className="stat-number-blue">
                {stats.quality > 0 && `${stats.quality.toFixed(1)}%`}
              </div>
              <div className="stat-label-blue">Quality Score</div>
            </div>
            <div className="stat-divider-blue"></div>
            <div className="stat-item-blue">
              <div className="stat-number-blue">
                {stats.tasks > 0 && `${(stats.tasks / 1000).toFixed(0)}k+`}
              </div>
              <div className="stat-label-blue">Tasks Completed</div>
            </div>
            <div className="stat-divider-blue"></div>
            <div className="stat-item-blue">
              <div className="stat-number-blue">
                {stats.response > 0 && `${stats.response}h`}
              </div>
              <div className="stat-label-blue">Avg Response</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator-blue" onClick={() => scrollTo('services')}>
        <span className="scroll-text-blue">Scroll</span>
        <div className="scroll-icon-blue"></div>
      </div>
    </section>
  );
};

export default HeroWhiteBlue;
