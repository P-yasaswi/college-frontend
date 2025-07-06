import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📩 Your message has been sent!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>📞 Contact Us</h2>
        <p>If you have any questions, suggestions, or feedback, feel free to reach out to us!</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

