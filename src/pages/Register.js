import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered as ${form.role}!`);
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

