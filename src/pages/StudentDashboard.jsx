import React from 'react';
import './StudentDashboard.css';
import searchIcon from '../assets/icons/search.png';
import registerIcon from '../assets/icons/register.png';
import myEventIcon from '../assets/icons/myevents.png';
import feedbackIcon from '../assets/icons/feedbacks.png';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();

  const features = [
    { title: 'My Events', icon: myEventIcon, action: () => navigate('/student/my-events') },
    { title: 'Search Events', icon: searchIcon, action: () => navigate('/student/search-events') },
    { title: 'Register for Events', icon: registerIcon, action: () => navigate('/student/register') },
    { title: 'Give Feedback', icon: feedbackIcon, action: () => navigate('/student/feedback') },


    

  ];

  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>

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

export default StudentDashboard;
