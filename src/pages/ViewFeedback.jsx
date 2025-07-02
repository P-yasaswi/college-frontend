import React from 'react';
import './ViewFeedback.css';

const dummyFeedbacks = [
  {
    id: 1,
    name: 'Bhargavi',
    email: 'bhargavi@student.com',
    message: 'Loved the Tech Fest event! It was very well organized.',
  },
  {
    id: 2,
    name: 'Revanth',
    email: 'revanth@student.com',
    message: 'Cultural Night was amazing. Please do it every semester!',
  },
  {
    id: 3,
    name: 'Sindhu',
    email: 'sindhu@student.com',
    message: 'Website is easy to use and well-designed!',
  },
];

function ViewFeedback() {
  return (
    <div className="view-feedback">
      <h2>All Feedback Received</h2>
      <div className="feedback-list">
        {dummyFeedbacks.map((fb) => (
          <div className="feedback-card" key={fb.id}>
            <h3>{fb.name} ({fb.email})</h3>
            <p>{fb.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewFeedback;
