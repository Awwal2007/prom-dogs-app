import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    console.log('Form submitted:', formData);
    // Add backend integration or email service here
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>📍 Address:</strong> 123 Puppy Lane, Dogtown, PA 12345</p>
          <p><strong>📞 Phone:</strong> (123) 456-7890</p>
          <p><strong>✉️ Email:</strong> contact@promdogs.com</p>
        </div>

        <div className="contact-map">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.897790244939!2d-74.00601568459334!3d40.71277597933185"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" required onChange={handleChange} />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required onChange={handleChange}></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
