import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/RoleLogin.css';

const RoleLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData);

      const { token, user } = res.data;
      localStorage.setItem('token', token); // Save token (optional)

      if (user.role === 'admin') navigate('/admin');
      else if (user.role === 'student') navigate('/student');
      else if (user.role === 'clubhead' || user.role === 'coordinator') navigate('/coordinator');
      else alert("Unknown role");

    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="role-login-container">
      <div className="top-buttons">
        <button onClick={() => navigate('/about')}>About Us</button>
        <button onClick={() => navigate('/contact')}>Contact Us</button>
        <button onClick={() => alert('Logout Successfully')}>Logout</button>
      </div>

      <h2 className="main-title">Login to Your Role</h2>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <div className="login-boxes">
        {/* Login Box */}
        <div className="login-box">
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            <a href="/register">Sign Up Now</a> | <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleLogin;


