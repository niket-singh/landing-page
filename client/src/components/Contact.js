import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

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

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Let's Build Together</h2>
            <p>Whether you're looking for elite talent or enterprise AI solutions, we're here to help.</p>

            <div className="contact-features">
              <div className="contact-feature">
                <div className="feature-icon-small">⚡</div>
                <div>
                  <h4>Quick Response</h4>
                  <p>We'll get back to you within 24 hours</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon-small">🤝</div>
                <div>
                  <h4>Personalized Solutions</h4>
                  <p>Tailored to your specific needs</p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="feature-icon-small">💼</div>
                <div>
                  <h4>Enterprise Ready</h4>
                  <p>Scalable solutions for any size</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {submitStatus === 'success' ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">I'm Interested In</label>
                  <select
                    id="interest"
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
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
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
    </section>
  );
};

export default Contact;
