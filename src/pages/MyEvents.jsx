import React from 'react';
import './MyEvents.css';

const myRegisteredEvents = [
  {
    id: 1,
    title: 'Treasure Hunting 2025',
    date: '2025-07-10',
    image: '/assets/events/treasure.jpg',
  },
  {
    id: 2,
    title: 'Fashion Show',
    date: '2025-07-15',
    image: '/assets/events/fashion.jpg',
  },
];

function MyEvents() {
  return (
    <div className="my-events">
      <h2>My Registered Events</h2>
      <div className="my-event-list">
        {myRegisteredEvents.map((event) => (
          <div className="my-event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyEvents;
