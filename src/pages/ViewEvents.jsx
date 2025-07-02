import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewEvents.css';

const ViewEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data))
      .catch(err => {
        console.error('Failed to fetch events:', err);
        alert('Error fetching events. Check if backend is running.');
      });
  }, []);

  return (
    <div className="view-events-container">
      <h2 style={{ textAlign: 'center', color: '#5c1f99' }}>All Events</h2>
      <div className="event-cards">
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map((event) => (
            <div className="event-card" key={event._id}>
              {/* ✅ Use the real image URL directly */}
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-img"
                />
              )}
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Organized By:</strong> {event.organizedBy}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewEvents;



