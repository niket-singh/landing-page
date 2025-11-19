import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './BenefitsV2.css';
import '../styles/MASTER_THEME.css';

const BenefitsV2 = ({ openContactModal }) => {
  const [ref1, isVisible1] = useIntersectionObserver();
  const [ref2, isVisible2] = useIntersectionObserver();

  const communityImages = [
    "/assets/images/WhatsApp%20Image%202025-11-19%20at%2000.47.41.jpeg",
    "/assets/images/WhatsApp%20Image%202025-11-19%20at%2000.47.41%20(3).jpeg",
    "/assets/images/WhatsApp%20Image%202025-11-19%20at%2000.47.41%20(4).jpeg"
  ];

  return (
    <section id="benefits" className="benefits-v2">
      <div className="container-v2">
        
        {/* Section Header */}
        <div className="section-header-v2 text-center" style={{ marginBottom: '3rem' }}>
          <div className="section-badge">
            <span className="badge-icon">🚀</span>
            <span>For Talent</span>
          </div>
          <h2 className="section-title">
            Why Top Engineers <br />
            <span className="gradient-text-blue">Choose Adzzat</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto', maxWidth: '700px' }}>
            Join 500+ professionals from IITs, NITs, and IIITs building the future of AI.
            Grow your career while working on cutting-edge projects.
          </p>
        </div>

        {/* Benefits Grid */}
        <div ref={ref1} className={`benefits-grid ${isVisible1 ? 'visible' : ''}`}>
          
          {/* Card 1: Learning */}
          <div className="benefit-card glass-card">
            <div className="benefit-icon gradient-primary">
               <span style={{fontSize: '24px'}}>📚</span>
            </div>
            <h3>Learning & Development</h3>
            <p>Advance your technical career with structured training in AI workflows, LLMs, and software engineering—designed by experts.</p>
          </div>

          {/* Card 2: Flexibility */}
          <div className="benefit-card glass-card">
            <div className="benefit-icon gradient-primary">
               <span style={{fontSize: '24px'}}>🌍</span>
            </div>
            <h3>Flexible Work</h3>
            <p>Work remotely from anywhere in India while contributing to mission-critical AI development for global startups.</p>
          </div>

          {/* Card 3: Payouts */}
          <div className="benefit-card glass-card">
             <div className="benefit-icon gradient-primary">
               <span style={{fontSize: '24px'}}>💰</span>
            </div>
            <h3>Reliable Payouts</h3>
            <p>Earn competitive rates with seamless bi-weekly or monthly payments directly into your account.</p>
          </div>
          
          {/* Card 4: Career */}
           <div className="benefit-card glass-card">
             <div className="benefit-icon gradient-primary">
               <span style={{fontSize: '24px'}}>📈</span>
            </div>
            <h3>Career Advancement</h3>
            <p>Level up your career with referrals, top-tier portfolio projects, and mentorship from Silicon Valley teams.</p>
          </div>

          {/* Card 5: Elite Community (Wide with Images) */}
          <div className="benefit-card glass-card wide-benefit">
            <div className="community-content-wrapper">
              
              {/* Left Text */}
              <div className="community-left">
                <div className="benefit-icon gradient-primary">
                  <span style={{fontSize: '24px'}}>🤝</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', marginTop: '1rem' }}>Elite Community</h3>
                <p>
                  Join a curated network of engineers, researchers, and analysts from IITs, NITs, IIITs. 
                  Work, learn, and grow together.
                </p>
                <div className="community-badges">
                   <div className="section-badge" style={{ background: 'white' }}>500+ Members</div>
                   <div className="section-badge" style={{ background: 'white' }}>Top 1% Talent</div>
                </div>
              </div>

              {/* Right Image Gallery */}
              <div className="community-right">
                {communityImages.map((img, index) => (
                   <div key={index} className="gallery-card">
                     <img 
                       src={img} 
                       alt={`Community member ${index + 1}`} 
                       onError={(e) => { e.target.style.display = 'none'; }} 
                     />
                   </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ref2} className={`benefits-cta ${isVisible2 ? 'visible' : ''}`}>
          <div className="cta-glass-card">
            <div className="cta-content-left">
              <h3>Ready to Join India's Next-Gen AI Workforce?</h3>
              <p>Be part of a community building the future of artificial intelligence.</p>
            </div>
            <div className="cta-content-right">
              <button className="btn-cta-white" onClick={openContactModal}>
                Apply Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsV2;