import React, { useState } from 'react';
import axios from 'axios';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
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
          onClose();
        }, 3000);
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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="modal-content">
          <div className="modal-header">
            <h2>Let's Build Together</h2>
            <p>Whether you're looking for elite talent or enterprise AI solutions, we're here to help.</p>
          </div>

          <div className="modal-body">
            {submitStatus === 'success' ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="modal-name">Full Name</label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="modal-email">Email Address</label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-company">Company Name</label>
                  <input
                    type="text"
                    id="modal-company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="modal-interest">I'm Interested In</label>
                  <select
                    id="modal-interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="talent">Hiring Talent</option>
                    <option value="llm-eval">LLM Evaluation Services</option>
                    <option value="dataset">Dataset Creation</option>
                    <option value="joining">Joining as Talent</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="modal-message">Message</label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your project or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="form-error">
                    An error occurred. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary btn-large btn-block"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
