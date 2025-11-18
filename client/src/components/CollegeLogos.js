import React from 'react';
import './CollegeLogos.css';

const CollegeLogos = () => {
  // College logos I1 to I29 (29 total)
  const collegeLogos = Array.from({ length: 29 }, (_, i) => ({
    id: `I${i + 1}`,
    name: `College ${i + 1}`,
    path: `/assets/colleges/I${i + 1}.png` // Adjust extension as needed (.jpg, .png, .webp)
  }));

  // Split into two rows for dual-layer scrolling
  const row1Logos = collegeLogos.slice(0, 15); // First 15 logos
  const row2Logos = collegeLogos.slice(15); // Remaining 14 logos

  return (
    <section className="college-logos-section">
      <div className="container-v2">
        {/* Section Header */}
        <div className="section-header-v2">
          <div className="section-badge">
            <span className="badge-icon">🎓</span>
            <span>Our Network</span>
          </div>
          <h2 className="section-title-v2">
            Experts From
            <span className="gradient-text-v2"> Premier Colleges</span>
          </h2>
          <p className="section-subtitle-v2">
            Our talent pool includes professionals from India's most prestigious institutions,
            bringing world-class expertise to your AI projects.
          </p>
        </div>

        {/* Scrolling Logo Bands */}
        <div className="logo-bands-container">
          {/* Row 1 - Scrolls Left to Right */}
          <div className="logo-band logo-band-1">
            <div className="logo-track">
              {/* First set of logos */}
              {row1Logos.map((logo) => (
                <div key={`${logo.id}-1`} className="logo-item-scroll">
                  <img
                    src={logo.path}
                    alt={logo.name}
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80"%3E%3Crect fill="%23f8f9ff" width="120" height="80"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="12" fill="%236366f1"%3E' + logo.id + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {row1Logos.map((logo) => (
                <div key={`${logo.id}-2`} className="logo-item-scroll">
                  <img
                    src={logo.path}
                    alt={logo.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80"%3E%3Crect fill="%23f8f9ff" width="120" height="80"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="12" fill="%236366f1"%3E' + logo.id + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolls Right to Left */}
          <div className="logo-band logo-band-2">
            <div className="logo-track logo-track-reverse">
              {/* First set of logos */}
              {row2Logos.map((logo) => (
                <div key={`${logo.id}-1`} className="logo-item-scroll">
                  <img
                    src={logo.path}
                    alt={logo.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80"%3E%3Crect fill="%23f8f9ff" width="120" height="80"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="12" fill="%236366f1"%3E' + logo.id + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {row2Logos.map((logo) => (
                <div key={`${logo.id}-2`} className="logo-item-scroll">
                  <img
                    src={logo.path}
                    alt={logo.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="120" height="80" viewBox="0 0 120 80"%3E%3Crect fill="%23f8f9ff" width="120" height="80"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="12" fill="%236366f1"%3E' + logo.id + '%3C/text%3E%3C/svg%3E';
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

export default CollegeLogos;
