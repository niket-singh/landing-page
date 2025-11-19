import React from 'react';
import '../styles/MASTER_THEME.css';

const CollegeLogosSoulAI = () => {
  // College logos I1 to I29 (excluding I3 as per original logic)
  const collegeLogos = Array.from({ length: 29 }, (_, i) => i + 1)
    .filter(num => num !== 3)
    .map(num => ({
      id: `I${num}`,
      name: `Institute ${num}`,
      path: `/assets/colleges/I${num}.png`
    }));

  // Duplicate for infinite scroll
  const logos = [...collegeLogos, ...collegeLogos];

  return (
    <section className="section-white" style={{ borderTop: '1px solid var(--blue-50)', borderBottom: '1px solid var(--blue-50)' }}>
      <div className="container-v2">
        <div className="section-header">
          <div className="section-badge">Trusted By</div>
          <h2 className="section-title">
            Experts from <span className="gradient-text-blue">Top Colleges</span>
          </h2>
        </div>

        <div className="marquee-container" style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
          <div className="marquee-track" style={{ display: 'inline-block', animation: 'scroll 40s linear infinite' }}>
            {logos.map((logo, idx) => (
              <div key={idx} style={{ display: 'inline-block', margin: '0 30px', verticalAlign: 'middle' }}>
                <img 
                  src={logo.path} 
                  alt={logo.name} 
                  style={{ height: '60px', filter: 'grayscale(100%) opacity(0.7)', transition: 'all 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)'}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container::before, .marquee-container::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0; width: 100px; z-index: 2;
          pointer-events: none;
        }
        .marquee-container::before { left: 0; background: linear-gradient(to right, white, transparent); }
        .marquee-container::after { right: 0; background: linear-gradient(to left, white, transparent); }
      `}</style>
    </section>
  );
};

export default CollegeLogosSoulAI;