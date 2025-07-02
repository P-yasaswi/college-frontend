import React, { useState } from 'react';
import './GiveFeedback.css';

function GiveFeedback() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', feedback);
    alert('Thank you for your feedback!');
    setFeedback({
      name: '',
      email: '',
      message: '',
      rating: '',
    });
  };

  return (
    <div className="feedback-container">
      <h2>Give Your Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          rows="5"
          value={feedback.message}
          onChange={handleChange}
          required
        />
        <select name="rating" value={feedback.rating} onChange={handleChange} required>
          <option value="">Select Rating</option>
          <option value="5">⭐ 5 - Excellent</option>
          <option value="4">⭐ 4 - Good</option>
          <option value="3">⭐ 3 - Average</option>
          <option value="2">⭐ 2 - Poor</option>
          <option value="1">⭐ 1 - Very Poor</option>
        </select>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default GiveFeedback;
