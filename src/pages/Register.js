import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://college-backend-eamn.onrender.com/api/register', form);
      alert(res.data.message || 'Registered successfully!');
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed!');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <select name="role" onChange={handleChange} value={form.role}>
          <option value="admin">Admin</option>
          <option value="coordinator">Coordinator</option>
          <option value="student">Student</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
