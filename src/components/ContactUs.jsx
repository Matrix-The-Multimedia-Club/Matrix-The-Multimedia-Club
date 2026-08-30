import React, { useState, useEffect } from 'react';
import './ContactFooter.css'; // Aapki CSS ab is page par apply hogi

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    const revealEls = document.querySelectorAll('[data-reveal]');
    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value.trim()) error = 'Name is required.';
      else if (value.trim().length < 2) error = 'Name must be at least 2 characters.';
    }
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) error = 'Email is required.';
      else if (!emailPattern.test(value.trim())) error = 'Enter a valid email address.';
    }
    if (name === 'subject') {
      if (!value.trim()) error = 'Subject is required.';
    }
    if (name === 'message') {
      if (!value.trim()) error = 'Message cannot be empty.';
      else if (value.trim().length < 10) error = 'Message should be at least 10 characters.';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      setStatus({ message: 'Please fix the errors above before sending.', type: 'error' });
      return;
    }

    setIsLoading(true);
    setStatus({ message: '', type: '' });

    setTimeout(() => {
      setIsLoading(false);
      setStatus({ message: 'Message sent successfully — we\'ll get back to you soon!', type: 'success' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ message: '', type: '' }), 4000);
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen pt-20 pb-32">
      {/* ============ CONTACT SECTION ============ */}
      <section className="contact-section" id="contact">
        <div className="stars"></div>
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>

        <div className="contact-wrap">
          <div className="section-heading" data-reveal>
            <span className="eyebrow">✦ Get In Touch</span>
            <h2>Signal the Matrix Club</h2>
            <p className="section-sub">Questions, ideas, or bugs to report? Send us a transmission — we usually respond within 24 hours.</p>
          </div>

          <div className="contact-grid">
            <div className="touch-stack" data-reveal>
              <div className="touch-card">
                <div className="touch-icon-wrap"><span className="touch-emoji" aria-hidden="true">📧</span></div>
                <div className="touch-content">
                  <h3 className="touch-title">Email</h3>
                  <a href="mailto:multimedia_club@vitbhopal.ac.in" className="touch-detail">multimedia_club@vitbhopal.ac.in</a>
                </div>
              </div>
              <div className="touch-card">
                <div className="touch-icon-wrap"><span className="touch-emoji" aria-hidden="true">📞</span></div>
                <div className="touch-content">
                  <h3 className="touch-title">Phone</h3>
                  <a href="tel:+918968978226" className="touch-detail">+91 89689 78226</a>
                </div>
              </div>
              <div className="touch-card">
                <div className="touch-icon-wrap"><span className="touch-emoji" aria-hidden="true">📍</span></div>
                <div className="touch-content">
                  <h3 className="touch-title">Location</h3>
                  <p className="touch-detail touch-address">The Matrix Club<br />VIT Bhopal University<br />Kothri Kalan, Sehore<br />Madhya Pradesh — 466114</p>
                </div>
              </div>
            </div>

            <div className="glass-card form-card float-b" data-reveal>
              <h3 className="card-title">Send a Message</h3>
              <form id="contactForm" className="contact-form" noValidate onSubmit={handleSubmit}>
                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Neo Anderson" value={formData.name} onChange={handleChange} />
                  <span className="error-msg">{errors.name}</span>
                </div>
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email ID</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                  <span className="error-msg">{errors.email}</span>
                </div>
                <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} />
                  <span className="error-msg">{errors.subject}</span>
                </div>
                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Type your message..." value={formData.message} onChange={handleChange}></textarea>
                  <span className="error-msg">{errors.message}</span>
                </div>
                <button type="submit" className={`send-btn ${isLoading ? 'is-loading' : ''}`} disabled={isLoading}>
                  <span className="btn-text">Send Message</span>
                  <span className="btn-spinner" aria-hidden="true"></span>
                </button>
                <div className={`form-status ${status.message ? 'show' : ''} ${status.type}`} role="status" aria-live="polite">{status.message}</div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="site-footer">
        <div className="stars stars-footer"></div>
        <div className="glow-line"></div>
        <div className="footer-wrap">
          <div className="footer-grid">
            <div className="footer-col footer-brand" data-reveal>
              <div className="footer-logo"><span className="logo-star">✦</span> Matrix Club</div>
              <p className="footer-tagline">Building the next generation of coders, one commit at a time. Learn. Build. Break things. Repeat.</p>
            </div>
            <div className="footer-col" data-reveal>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#join">Join Us</a></li>
              </ul>
            </div>
            <div className="footer-col" data-reveal>
              <h4>Contact Info</h4>
              <ul className="footer-contact-list">
                <li><span className="info-tag">Email</span> multimedia_club@vitbhopal.ac.in</li>
                <li><span className="info-tag">Phone</span> +91 89689 78226</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Matrix Club. All rights reserved.</p>
            <p className="footer-credit">Designed &amp; built by the Matrix Club Web Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
