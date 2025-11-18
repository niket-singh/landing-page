import React, { useState, useEffect } from 'react';
import './NavbarV2.css';

const NavbarV2 = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar-v2 ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-v2">
        <div className="nav-content-v2">
          {/* Logo */}
          <div className="logo-v2">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L4 10L16 16L28 10L16 4Z" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 22L16 28L28 22" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16L16 22L28 16" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="logoGradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="logo-text-v2">Adzzat</span>
            <span className="logo-badge">Elite AI Talent</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links-v2">
            <li>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                Services
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>
                For Talent
              </a>
            </li>
            <li>
              <a href="#expertise" onClick={(e) => { e.preventDefault(); scrollToSection('expertise'); }}>
                Expertise
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
                FAQ
              </a>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="nav-cta-v2">
            <button className="btn-nav-secondary" onClick={() => scrollToSection('contact')}>
              <span>Contact</span>
            </button>
            <button className="btn-nav-primary" onClick={() => scrollToSection('contact')}>
              <span>Get Started</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              <span className="menu-icon">🎯</span>
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>
              <span className="menu-icon">📋</span>
              <span>How It Works</span>
            </a>
          </li>
          <li>
            <a href="#benefits" onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}>
              <span className="menu-icon">🚀</span>
              <span>For Talent</span>
            </a>
          </li>
          <li>
            <a href="#expertise" onClick={(e) => { e.preventDefault(); scrollToSection('expertise'); }}>
              <span className="menu-icon">💡</span>
              <span>Expertise</span>
            </a>
          </li>
          <li>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
              <span className="menu-icon">❓</span>
              <span>FAQ</span>
            </a>
          </li>
        </ul>
        <div className="mobile-menu-cta">
          <button className="btn-mobile-primary" onClick={() => scrollToSection('contact')}>
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarV2;
