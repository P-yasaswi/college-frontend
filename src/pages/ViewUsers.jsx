import React from 'react';
import './ViewUsers.css';

const dummyUsers = [
  { id: 1, name: 'Yashu', email: 'yashu@gmail.com', role: 'Admin' },
  { id: 2, name: 'Sindhu', email: 'sindhu@college.com', role: 'Coordinator' },
  { id: 3, name: 'Bhargavi', email: 'bhargavi@student.com', role: 'Student' },
  { id: 4, name: 'Revanth', email: 'revanth@student.com', role: 'Student' },
];

const ViewUsers = () => {
  return (
    <div className="view-users">
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
