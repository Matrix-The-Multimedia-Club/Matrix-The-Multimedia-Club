import React, { useState, useEffect } from 'react';
import './ContactFooter.css'; 

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
    // bg-transparent lagaya hai taaki team ka hexagon background dikhe
    <div className="w-full min-h-screen pt-24 pb-32 bg-transparent text-white font-sans">
      
      {/* ============ CONTACT SECTION ============ */}
      {/* Yahan se stars aur nebula hata diye hain */}
      <section className="contact-section relative z-10" id="contact">
        <div className="contact-wrap max-w-6xl mx-auto px-4">
          
          <div className="section-heading text-center mb-12" data-reveal>
            <span className="eyebrow inline-block mb-4 px-4 py-1 rounded-full border border-blue-400 text-blue-400 bg-blue-900/30 text-sm font-semibold tracking-widest uppercase">
              ✦ Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-500">
              Signal the Matrix Club
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Questions, ideas, or bugs to report? Send us a transmission — we usually respond within 24 hours.
            </p>
          </div>

          <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            <div className="touch-stack space-y-6" data-reveal>
              <div className="touch-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex gap-4 hover:-translate-y-1 transition-transform">
                <div className="touch-icon-wrap w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-2xl">📧</div>
                <div className="touch-content">
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:multimedia_club@vitbhopal.ac.in" className="text-gray-400 hover:text-white transition-colors">multimedia_club@vitbhopal.ac.in</a>
                </div>
              </div>
              <div className="touch-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex gap-4 hover:-translate-y-1 transition-transform">
                <div className="touch-icon-wrap w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-2xl">📞</div>
                <div className="touch-content">
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:+918968978226" className="text-gray-400 hover:text-white transition-colors">+91 89689 78226</a>
                </div>
              </div>
              <div className="touch-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex gap-4 hover:-translate-y-1 transition-transform">
                <div className="touch-icon-wrap w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-2xl">📍</div>
                <div className="touch-content">
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">The Matrix Club<br />VIT Bhopal University<br />Kothri Kalan, Sehore<br />Madhya Pradesh — 466114</p>
                </div>
              </div>
            </div>

            <div className="glass-card form-card float-b bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8" data-reveal>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form id="contactForm" className="contact-form space-y-4" noValidate onSubmit={handleSubmit}>
                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                  <input type="text" id="name" name="name" placeholder="Neo Anderson" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-400 focus:outline-none" />
                  <span className="error-msg text-red-500 text-sm">{errors.name}</span>
                </div>
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email ID</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-400 focus:outline-none" />
                  <span className="error-msg text-red-500 text-sm">{errors.email}</span>
                </div>
                <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                  <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-400 focus:outline-none" />
                  <span className="error-msg text-red-500 text-sm">{errors.subject}</span>
                </div>
                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Type your message..." value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-400 focus:outline-none"></textarea>
                  <span className="error-msg text-red-500 text-sm">{errors.message}</span>
                </div>
                <button type="submit" className={`w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all ${isLoading ? 'opacity-70' : ''}`} disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                <div className={`form-status mt-2 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-500'}`} role="status" aria-live="polite">{status.message}</div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="site-footer relative z-10 mt-20 pt-16 border-t border-white/10 bg-transparent">
        <div className="footer-wrap max-w-6xl mx-auto px-4 pb-8">
          <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="footer-col footer-brand" data-reveal>
              <div className="footer-logo text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-purple-500">✦</span> Matrix Club</div>
              <p className="text-gray-400 text-sm leading-relaxed">Building the next generation of coders, one commit at a time. Learn. Build. Break things. Repeat.</p>
            </div>
            <div className="footer-col" data-reveal>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#join" className="hover:text-white transition-colors">Join Us</a></li>
              </ul>
            </div>
            <div className="footer-col" data-reveal>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="text-blue-400 text-xs font-bold uppercase mr-2 bg-blue-500/10 px-2 py-1 rounded">Email</span> multimedia_club@vitbhopal.ac.in</li>
                <li><span className="text-blue-400 text-xs font-bold uppercase mr-2 bg-blue-500/10 px-2 py-1 rounded">Phone</span> +91 89689 78226</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Matrix Club. All rights reserved.</p>
            <p>Designed &amp; built by the Matrix Club Web Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;