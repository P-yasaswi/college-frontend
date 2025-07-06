import React, { useState } from 'react';
import './RegisterEvent.css';

function RegisterEvent() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    rollNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    alert('Registration Successful!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      college: '',
      department: '',
      year: '',
      rollNumber: '',
    });
  };

  return (
    <div className="register-form-container">
      <h2>Event Registration Form</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="college"
          placeholder="College Name"
          value={formData.college}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department / Branch"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <select name="year" value={formData.year} onChange={handleChange} required>
          <option value="">Select Year of Study</option>
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
          <option value="4th Year">4th Year</option>
        </select>
        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number / Student ID"
          value={formData.rollNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default RegisterEvent;

