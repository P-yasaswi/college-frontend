import React, { useState } from 'react';
import './RegisterEvent.css';
import axios from 'axios';

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

  //const handleChange = (e) => {
    //setFormData({ ...formData, [e.target.name]: e.target.value });
  //};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'https://college-backend-eamn.onrender.com/api/register-event',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message || '🎉 Registered Successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        college: '',
        department: '',
        year: '',
        rollNumber: '',
      });
    } catch (error) {
      alert(error.response?.data?.message || '❌ Registration Failed!');
      console.error(error);
    }
  };

  return (
    <div className="register-form-container">
      <h2>Event Registration Form</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* same input fields */}
        {/* ... */}
        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default RegisterEvent;

