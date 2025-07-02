import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '', role: 'student' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${form.role}`);

    if (form.role === 'admin') navigate('/admin');
    else if (form.role === 'coordinator') navigate('/coordinator');
    else navigate('/student');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <select name="role" onChange={handleChange} value={form.role}>
          <option value="admin">Admin</option>
          <option value="coordinator">Coordinator</option>
          <option value="student">Student</option>
        </select>

        <button type="submit">Login</button>
      </form>
      <p className="extra-links">
        Don’t have an account? <span onClick={() => navigate('/register')}>Register</span><br />
        <span onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
      </p>
    </div>
  );
}

export default Login;
