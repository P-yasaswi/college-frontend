import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/RoleLoginPage.css';

function RoleLoginPage() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    admin: { email: '', password: '' },
    club: { email: '', password: '' },
    student: { email: '', password: '' }
  });

  const handleChange = (role, field, value) => {
    setCredentials((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [field]: value
      }
    }));
  };

  const handleLogin = async (role) => {
    const { email, password } = credentials[role];

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      const res = await axios.post('https://college-backend-eamn.onrender.com/api/login', {
        email,
        password,
      });

      const user = res.data.user;
      const token = res.data.token;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      alert('✅ Login successful!');

      if (user.role === 'admin') navigate('/admin');
      else if (user.role === 'clubhead' || user.role === 'coordinator') navigate('/coordinator');
      else navigate('/student');
    } catch (err) {
      alert(err.response?.data?.message || '❌ Login failed!');
    }
  };

  return (
    <div className="role-login-page">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo-title">
            <img src={require('../assets/logo.png')} alt="Logo" className="logo-img" />
            <h2 className="logo-heading">College Event Management</h2>
          </div>
        </div>
        <div className="navbar-right">
          <button onClick={() => navigate('/about')}>About Us</button>
          <button onClick={() => navigate('/contact')}>Contact Us</button>
          <button onClick={() => navigate('/logout')}>Logout</button>

          <button onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            alert("Logged out successfully!");
          }}>Logout</button>
        </div>
      </nav>

      <div className="login-heading">
        <h1>Welcome to the Login Page</h1>
        <p>Please select your role and login below</p>
      </div>

      <div className="login-boxes">
        {/* Admin Login */}
        <div className="login-box">
          <h2>Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={credentials.admin.email}
            onChange={(e) => handleChange('admin', 'email', e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.admin.password}
            onChange={(e) => handleChange('admin', 'password', e.target.value)}
          />
          <button onClick={() => handleLogin('admin')}>Login</button>
          <p>No account? <span onClick={() => navigate('/register')}>Signup now</span></p>
          <p className="link" onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
        </div>

        {/* Club Holder Login */}
        <div className="login-box">
          <h2>Club Holder Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={credentials.club.email}
            onChange={(e) => handleChange('club', 'email', e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.club.password}
            onChange={(e) => handleChange('club', 'password', e.target.value)}
          />
          <button onClick={() => handleLogin('club')}>Login</button>
          <p>No account? <span onClick={() => navigate('/register')}>Signup now</span></p>
          <p className="link" onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
        </div>

        {/* Student Login */}
        <div className="login-box">
          <h2>Student Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={credentials.student.email}
            onChange={(e) => handleChange('student', 'email', e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.student.password}
            onChange={(e) => handleChange('student', 'password', e.target.value)}
          />
          <button onClick={() => handleLogin('student')}>Login</button>
          <p>No account? <span onClick={() => navigate('/register')}>Signup now</span></p>
          <p className="link" onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}

export default RoleLoginPage;
