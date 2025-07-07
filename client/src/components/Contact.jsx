import React, { useState } from 'react';
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully! 📨');
        setFormData({ username: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message 😔');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong! ❌');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
        {status && <p className="status-msg">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
