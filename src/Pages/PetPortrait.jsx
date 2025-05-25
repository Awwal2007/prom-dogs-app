import React, { useState } from 'react';
import './PetPortrait.css';

const PetPortrait = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Portrait request submitted! We’ll contact you soon.');
    console.log(formData);
    // Add backend integration here if needed
  };

  return (
    <div className="portrait-page">
      <div className="hero">
        <h1>Custom Pet Portraits</h1>
        <p>Turn your furry friend into timeless art 🐾</p>
      </div>

      <div className="content">
        <div className="info">
          <h2>How It Works</h2>
          <p>
            Upload a clear photo of your pet, tell us a bit about them,
            and we’ll create a beautiful hand-drawn or digital portrait.
            Perfect for gifts, memorials, or simply showing your love.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="portrait-form">
          <label>
            Your Name
            <input type="text" name="name" required onChange={handleChange} />
          </label>
          <label>
            Email Address
            <input type="email" name="email" required onChange={handleChange} />
          </label>
          {/* <label>
            Upload a Photo
            <input type="file" name="file" accept="image/*" required onChange={handleChange} />
          </label> */}
          <label>
            Notes / Style Preferences
            <textarea name="notes" rows="4" onChange={handleChange}></textarea>
          </label>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default PetPortrait;
