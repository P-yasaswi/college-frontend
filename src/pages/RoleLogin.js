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
  const [loading, setLoading] = useState(false); // Optional loading state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('https://college-backend-eamn.onrender.com/api/login', formData);

      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert('Login successful!');

      // Role-based redirection
      if (user.role === 'admin') navigate('/admin');
      else if (user.role === 'student') navigate('/student');
      else if (user.role === 'clubhead' || user.role === 'coordinator') navigate('/coordinator');
      else alert('Unknown role');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="role-login-container">
      {/* Navbar */}
      <div className="top-buttons">
        <button onClick={() => navigate('/about')}>About Us</button>
        <button onClick={() => navigate('/contact')}>Contact Us</button>
        <button onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          alert('Logged out successfully!');
        }}>Logout</button>
      </div>

      {/* Heading */}
      <h2 className="main-title">Login to Your Role</h2>

      {/* Error Message */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {/* Login Box */}
      <div className="login-boxes">
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
          <button onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p>
            <a href="/register">Sign Up Now</a> | <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleLogin;
