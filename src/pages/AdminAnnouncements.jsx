import React, { useState, useEffect } from 'react';
import './AdminAnnouncements.css';
import axios from 'axios';

function AdminAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
  });

  // ✅ Fetch announcements from backend
  useEffect(() => {
    axios.get('https://college-backend-eamn.onrender.com/api/announcements')
      .then(res => setAnnouncements(res.data))
      .catch(err => console.error('Error fetching announcements:', err));
  }, []);

  // ✅ Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit new announcement to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://college-backend-eamn.onrender.com/api/announcements', formData);
      setAnnouncements([res.data, ...announcements]);
      setFormData({ title: '', message: '' });
      alert('✅ Announcement added successfully!');
    } catch (error) {
      alert('❌ Failed to add announcement.');
      console.error(error);
    }
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
        />
        <button type="submit">Add Announcement</button>
      </form>

      <div className="announcement-list">
        {announcements.map((item) => (
          <div className="announcement-card" key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminAnnouncements;

