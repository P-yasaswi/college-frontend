import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminEvents.css';

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    image: '',
    description: '',
    date: '',
    organizedBy: ''
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post(
        'http://localhost:5000/api/events',
        newEvent,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('✅ Event Created!');
      setNewEvent({ title: '', image: '', description: '', date: '', organizedBy: '' });
      fetchEvents();
    } catch (err) {
      alert('❌ Failed to create event');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('🗑️ Event Deleted!');
      fetchEvents();
    } catch (err) {
      alert('❌ Failed to delete event');
      console.error(err);
    }
  };

  const handleUpdate = async (id, updatedTitle) => {
    try {
      await axios.put(
        `http://localhost:5000/api/events/${id}`,
        { title: updatedTitle },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('✏️ Event Updated!');
      fetchEvents();
    } catch (err) {
      alert('❌ Failed to update event');
      console.error(err);
    }
  };

  return (
    <div className="admin-events">
      <h2>📅 Admin Event Management</h2>

      {/* Create New Event Form */}
      <div className="create-form">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newEvent.image}
          onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Organized By"
          value={newEvent.organizedBy}
          onChange={(e) => setNewEvent({ ...newEvent, organizedBy: e.target.value })}
        />
        <button className="add-btn" onClick={handleCreate}>➕ Add Event</button>
      </div>

      {/* Display Events */}
      <div className="event-list">
        {events.map((event) => (
          <div className="event-card" key={event._id}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Organized By:</strong> {event.organizedBy}</p>
            <div className="btn-group">
              <button className="update-btn" onClick={() => handleUpdate(event._id, event.title)}>✏️ Update</button>
              <button className="delete-btn" onClick={() => handleDelete(event._id)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEvents;


