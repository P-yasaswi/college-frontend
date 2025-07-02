import React, { useState } from 'react';
import './CreateEvent.css';

function CreateEvent() {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    organizedBy: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleImageChange = (e) => {
    setEventData({ ...eventData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', eventData.title);
    formData.append('description', eventData.description);
    formData.append('date', eventData.date);
    formData.append('organizedBy', eventData.organizedBy);
    formData.append('image', eventData.image);

    try {
      const res = await fetch('http://localhost:5000/api/events/create', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      alert(data.message || 'Event Created!');
      // Reset form
      setEventData({
        title: '',
        description: '',
        date: '',
        organizedBy: '',
        image: null,
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create event.');
    }
  };

  return (
    <div className="create-event">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          name="title"
          placeholder="Event Title"
          value={eventData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={eventData.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
        />
        <input
          name="organizedBy"
          placeholder="Organized By"
          value={eventData.organizedBy}
          onChange={handleChange}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateEvent;
