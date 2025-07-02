import React from 'react';
import './Dashboard.css'; // use the same CSS as AdminDashboard
import viewIcon from '../assets/icons/views.png';
import clubIcon from '../assets/icons/clubs.png';
import userIcon from '../assets/icons/users.png';
import feedbackIcon from '../assets/icons/feedbackss.png';
import announceIcon from '../assets/icons/announcements.png';
import { useNavigate } from 'react-router-dom';

function CoordinatorDashboard() {
  const navigate = useNavigate();

  const features = [
    { title: 'View Events', icon: viewIcon, action: () => navigate('/view-events') },
    { title: 'Create Club', icon: clubIcon, action: () => navigate('/create-club') },
    { title: 'View Users', icon: userIcon, action: () => navigate('/view-users') },
    { title: 'View Feedback', icon: feedbackIcon, action: () => navigate('/view-feedback') },
    { title: 'Announcements', icon: announceIcon, action: () => navigate('/announcements') },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome Coordinator!</h2>

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

export default CoordinatorDashboard;



