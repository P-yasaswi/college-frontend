import React, { useState } from 'react';
import './AdminAnnouncements.css';

function AdminAnnouncements() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Tech Fest 2025', message: 'Starts on July 5th. Don’t miss it!' },
    { id: 2, title: 'Club Registrations Open', message: 'Join your favorite clubs before July 7th.' },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      id: announcements.length + 1,
      ...formData,
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setFormData({ title: '', message: '' });
    alert('Announcement added successfully!');
  };

  return (
    <div className="announcements-page">
      <h2>Manage Announcements</h2>

      <form className="announcement-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Announcement Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Announcement Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Add Announcement</button>
      </form>

      <div className="announcement-list">
        {announcements.map((item) => (
          <div className="announcement-card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminAnnouncements;
