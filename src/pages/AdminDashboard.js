import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import eventIcon from '../assets/icons/event.png';
import viewIcon from '../assets/icons/view.png';
import userIcon from '../assets/icons/user.png';
import feedbackIcon from '../assets/icons/feedback.png';
import announceIcon from '../assets/icons/announcement.png';


function AdminDashboard() {
  const navigate = useNavigate();

  const features = [
    { title: 'Create Event', icon: eventIcon, action: () => navigate('/admin/create-event') },
    { title: 'View Events', icon: viewIcon, action: () => navigate('/admin/view-events') },
    { title: 'View Users', icon: userIcon, action: () => navigate('/admin/view-users') },
    { title: 'View Feedback', icon: feedbackIcon, action: () => navigate('/admin/view-feedback') },
    { title: 'Announcements', icon: announceIcon, action: () => navigate('/admin/announcements') },
    { title: 'Create/View Events', icon: viewIcon, action: () => navigate('/admin-events') }

  ];

  return (
    <div className="dashboard">
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







