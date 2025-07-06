import React, { useState } from 'react';
import './GiveFeedback.css';
import axios from 'axios';

function GiveFeedback() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
    rating: '',
  });

  //const handleChange = (e) => {
//const { name, value } = e.target;
    //setFeedback({ ...feedback, [name]: value });
  //};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'https://college-backend-eamn.onrender.com/api/feedback',
        feedback,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message || '✅ Feedback submitted!');
      setFeedback({ name: '', email: '', message: '', rating: '' });
    } catch (error) {
      alert(error.response?.data?.message || '❌ Feedback submission failed!');
      console.error(error);
    }
  };

  return (
    <div className="feedback-container">
      <h2>Give Your Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        {/* same inputs */}
        {/* ... */}
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default GiveFeedback;

