import React, { useEffect, useRef, useState } from 'react';
import '../styles/StatsSection.css';

const StatsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { target: 1000000, label: 'Tasks Completed', suffix: '+' },
    { target: 900000, label: 'Professionals', suffix: '+' },
    { target: 53000, label: 'PhDs Collaborating', suffix: '+' },
    { target: 150, label: 'Countries', suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const counterElements = document.querySelectorAll('.stat-value');
    const speed = 2000; // Duration in ms

    counterElements.forEach((el) => {
      const target = parseInt(el.getAttribute('data-target'));
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / speed, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * target);

        el.textContent = formatNumber(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = formatNumber(target);
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item fade-slide">
              <div className="stat-number">
                <span className="stat-value" data-target={stat.target}>
                  0
                </span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
