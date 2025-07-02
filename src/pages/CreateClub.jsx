import React, { useState } from 'react';
import './CreateClub.css'; // You can style it later

function CreateClub() {
  const [club, setClub] = useState({
    name: '',
    description: '',
    createdBy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClub({ ...club, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Club Created:', club);
    alert('Club Created Successfully!');
    setClub({ name: '', description: '', createdBy: '' });
  };

  return (
    <div className="create-club">
      <h2>Create a New Club</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Club Name"
          value={club.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={club.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="createdBy"
          placeholder="Created By"
          value={club.createdBy}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Club</button>
      </form>
    </div>
  );
}

export default CreateClub;
