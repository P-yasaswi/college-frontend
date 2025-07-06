import React, { useEffect, useState } from 'react';
import './StudentAnnouncements.css';
import axios from 'axios';

function StudentAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  // ✅ Try to fetch announcements from backend
  useEffect(() => {
    axios.get('https://college-backend-eamn.onrender.com/api/announcements')
      .then(res => setAnnouncements(res.data))
      .catch(err => {
        console.error('Failed to load announcements:', err);
        alert('❌ Could not fetch announcements. Showing dummy data.');

        // ✅ Dummy fallback announcements
        setAnnouncements([
          { _id: '1', title: '🎉 Welcome to the Campus!', message: 'Orientation starts July 10th at the auditorium.' },
          { _id: '2', title: '📢 Hackathon Registration', message: 'Join our inter-college hackathon. Deadline: July 14th.' },
          { _id: '3', title: '🎓 Club Meetups', message: 'All clubs meet every Friday at 4PM.' },
        ]);
      });
  }, []);

  return (
    <div className="student-announcements-page">
      <h2>📢 Latest Announcements</h2>

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

