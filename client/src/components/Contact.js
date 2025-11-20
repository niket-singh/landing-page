import React, { useState } from 'react';
import axios from 'axios';
import '../styles/MASTER_THEME.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('/api/contact', formData);

      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          interest: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid var(--blue-200)',
    background: 'rgba(255,255,255,0.8)',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit'
  };

  return (
    <section className="section-white" style={{ background: 'linear-gradient(180deg, var(--white) 0%, var(--blue-50) 100%)' }}>
      <div className="container-v2">
        <div className="glass-card" style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

          {/* Left Info */}
          <div>
            <div className="section-badge">Get in Touch</div>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>Ready to Scale <br /><span className="gradient-text-blue">Your AI?</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Schedule a call with our solutions architect to discuss your data and talent needs.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--blue-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✉️</div>
                <span style={{ fontWeight: '500' }}>contact@adzzat.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--blue-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
                <span style={{ fontWeight: '500' }}>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          {submitStatus === 'success' ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                margin: '0 auto 1.5rem'
              }}>✓</div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '0.5rem' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                required
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                style={inputStyle}
              />
              <select
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">I am looking to...</option>
                <option value="talent">Hire Talent</option>
                <option value="llm-eval">LLM Evaluation Services</option>
                <option value="dataset">Dataset Creation</option>
                <option value="joining">Join as Talent</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                style={{...inputStyle, resize: 'vertical'}}
              ></textarea>

              {submitStatus === 'error' && (
                <div style={{
                  padding: '1rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '12px',
                  color: '#dc2626',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                  An error occurred. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="btn-premium-blue"
                style={{ marginTop: '1rem', width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
