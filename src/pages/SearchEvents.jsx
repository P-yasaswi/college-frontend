import React, { useState } from 'react';
import './SearchEvents.css';

const dummyEvents = [
  {
    id: 1,
    title: 'Treasure Hunting 2025',
    description: 'A 3-day hunt.',
    date: '2025-07-10',
    image: '/assets/events/treasure.jpg',
  },
  {
    id: 2,
    title: 'Fashion Show',
    description: 'Fashion show  performances by students.',
    date: '2025-07-15',
    image: '/assets/events/fashion.jpg',
  },
  {
    id: 3,
    title: 'Start-Up Expo',
    description: 'Students pitch their startup ideas and win funding.',
    date: '2025-07-20',
    image: '/assets/events/pitch.jpg',
  },
];

function SearchEvents() {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleRegister = (eventId) => {
    if (registeredEvents.includes(eventId)) {
      alert('You have already registered for this event!');
    } else {
      setRegisteredEvents([...registeredEvents, eventId]);
      alert('Registered successfully!');
    }
  };

  return (
    <div className="search-events">
      <h2>Available Events</h2>
      <div className="event-list">
        {dummyEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <button onClick={() => handleRegister(event.id)}>
              {registeredEvents.includes(event.id) ? 'Registered' : 'Register'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchEvents;
