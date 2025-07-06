import React, { useEffect, useState } from 'react';
import './StudentAnnouncements.css';
import axios from 'axios';

function StudentAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  // ✅ Fetch all announcements on page load
  useEffect(() => {
    axios.get('https://college-backend-eamn.onrender.com/api/announcements')
      .then(res => setAnnouncements(res.data))
      .catch(err => {
        console.error('Failed to load announcements:', err);
        alert('❌ Could not fetch announcements');
      });
  }, []);

  return (
    <div className="student-announcements-page">
      <h2>Latest Announcements</h2>

      {announcements.length === 0 ? (
        <p className="empty-msg">No announcements to display.</p>
      ) : (
        <div className="announcement-list">
          {announcements.map((item) => (
            <div className="announcement-card" key={item._id}>
              <h3>{item.title}</h3>
              <p>{item.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentAnnouncements;
