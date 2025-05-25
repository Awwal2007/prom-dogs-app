import React, { useState } from 'react';
import './BookPuppy.css';

const BookPuppy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    breed: '',
    phone: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly.');
    // Here you'd typically send this to a backend
  };

  return (
    <div className="book-puppy-page">
      <h1>Book a Puppy</h1>
      <p>Please fill out the form below to express your interest in booking a puppy. We’ll be in touch shortly!</p>

      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Full Name
          <input type="text" name="name" required value={formData.name} onChange={handleChange} />
        </label>

        <label>
          Email Address
          <input type="email" name="email" required value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Phone
          <input type="email" name="email" required value={formData.phone} onChange={handleChange} />
        </label>

        <label>
          County
          <input type="text" name="breed" required value={formData.breed} onChange={handleChange} />
        </label>

        <label>
          Preferred Collection Date
          <input type="date" name="date" required value={formData.date} onChange={handleChange} />
        </label>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookPuppy;
