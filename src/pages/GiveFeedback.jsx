import React, { useState } from 'react';
import axios from 'axios';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://college-backend-eamn.onrender.com/api/feedback', feedback);

      if (res.data.success) {
        alert('✅ Thank you for your feedback!');
        setFeedback({
          name: '',
          email: '',
          message: '',
          rating: '',
        });
      } else {
        alert('❌ Failed to submit feedback: ' + res.data.message);
      }
    } catch (err) {
      alert('❌ Error while submitting feedback!');
      console.error(err);
    }
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

