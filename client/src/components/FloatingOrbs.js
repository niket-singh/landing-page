import React from 'react';
import './FloatingOrbs.css';

const FloatingOrbs = () => {
  return (
    <div className="floating-orbs-container">
      {/* Large gradient orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="floating-orb orb-4"></div>
      <div className="floating-orb orb-5"></div>

      {/* Smaller accent orbs */}
      <div className="floating-orb-small orb-small-1"></div>
      <div className="floating-orb-small orb-small-2"></div>
      <div className="floating-orb-small orb-small-3"></div>
      <div className="floating-orb-small orb-small-4"></div>
      <div className="floating-orb-small orb-small-5"></div>
      <div className="floating-orb-small orb-small-6"></div>
    </div>
  );
};

export default FloatingOrbs;
