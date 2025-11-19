import React from 'react';
import './CollegeLogos-SoulAI.css';

const CollegeLogosSoulAI = () => {
  // College logos I1 to I29
  const collegeLogos = Array.from({ length: 29 }, (_, i) => ({
    id: `I${i + 1}`,
    name: `Institute ${i + 1}`,
    path: `/assets/colleges/I${i + 1}.png`
  }));

  // Split into two rows
  const row1Logos = collegeLogos.slice(0, 15);
  const row2Logos = collegeLogos.slice(15);

  return (
    <section className="college-logos-section-v2">
      <div className="container-v2">
        {/* Soul AI Style Header */}
        <div className="section-header-v2 text-center-v2">
          <div className="section-badge-v2">
            <span className="badge-dot-v2"></span>
            <span className="badge-text-v2">TRUSTED BY TOP INSTITUTIONS</span>
          </div>
          <h2 className="section-title-v2-soul">
            Talent from India's
            <br />
            <span className="gradient-text-soul">Premier Institutes</span>
          </h2>
          <p className="section-subtitle-v2-soul">
            IITs · NITs · IIITs · BITS · Top Engineering Colleges
          </p>
        </div>

        {/* Infinite Scrolling Logo Rows */}
        <div className="logo-marquee-wrapper">
          {/* Row 1 - Scrolls Left */}
          <div className="logo-marquee-row">
            <div className="logo-marquee-track">
              {row1Logos.map((logo, idx) => (
                <div key={`row1-1-${idx}`} className="logo-item-marquee">
                  <img
                    src={logo.path}
                    alt={logo.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80"%3E%3Crect fill="%23ffffff" width="160" height="80" rx="16"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="%236366f1"%3E' + logo.id + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              ))}
              {/* Duplicate for seamless scroll */}
              {row1Logos.map((logo, idx) => (
                <div key={`row1-2-${idx}`} className="logo-item-marquee">
                  <img
                    src={logo.path}
                    alt={logo.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80"%3E%3Crect fill="%23ffffff" width="160" height="80" rx="16"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="%236366f1"%3E' + logo.id + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolls Right */}
          <div className="logo-marquee-row">
            <div className="logo-marquee-track logo-marquee-reverse">
              {row2Logos.map((logo, idx) => (
                <div key={`row2-1-${idx}`} className="logo-item-marquee">
                  <img
                    src={logo.path}
                    alt={logo.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80"%3E%3Crect fill="%23ffffff" width="160" height="80" rx="16"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="%236366f1"%3E' + logo.id + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              ))}
              {/* Duplicate for seamless scroll */}
              {row2Logos.map((logo, idx) => (
                <div key={`row2-2-${idx}`} className="logo-item-marquee">
                  <img
                    src={logo.path}
                    alt={logo.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80"%3E%3Crect fill="%23ffffff" width="160" height="80" rx="16"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="12" font-weight="700" fill="%236366f1"%3E' + logo.id + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeLogosSoulAI;
