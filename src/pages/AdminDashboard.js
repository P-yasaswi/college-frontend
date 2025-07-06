import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import viewIcon from '../assets/icons/view.png';
import userIcon from '../assets/icons/user.png';
import feedbackIcon from '../assets/icons/feedback.png';
import announceIcon from '../assets/icons/announcement.png';
import backgroundImage from '../assets/admin-bg.jpg'; // ✅ background image from src/assets

function AdminDashboard() {
  const navigate = useNavigate();

  const features = [
  
    { title: 'View Users', icon: userIcon, action: () => navigate('/admin/view-users') },
    { title: 'View Feedback', icon: feedbackIcon, action: () => navigate('/admin/view-feedback') },
    { title: 'Announcements', icon: announceIcon, action: () => navigate('/admin/announcements') },
    { title: 'Create/View Events', icon: viewIcon, action: () => navigate('/admin-events') }
  ];

  return (
    <div
      className="dashboard"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <h2>Admin Home</h2>
      <div className="dashboard-cards-vertical">
        {features.map((feature, index) => (
          <div className="vertical-card" key={index} onClick={feature.action}>
            <img src={feature.icon} alt={feature.title} />
            <span>{feature.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;








