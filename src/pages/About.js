import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overlay">
        <h1>🎓 About Our College Event Management System</h1>

        <section>
          <h2>🎯 Purpose</h2>
          <p>
            Our platform simplifies how events and clubs are managed in colleges. From registrations to announcements, we provide an all-in-one system for Admins, Coordinators, and Students.
          </p>
        </section>

        <section>
          <h2>🚀 Features</h2>
          <ul>
            <li>🔐 Role-based Login (Admin, Club Head, Student)</li>
            <li>📝 Event Registration & Management</li>
            <li>👥 Club Creation & Member Joining</li>
            <li>📢 Announcements System</li>
            <li>💬 Feedback & Contact Forms</li>
          </ul>
        </section>

        <section>
          <h2>👨‍💻 Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <h4>Yashu</h4>
              <p>💻 Backend & Full Stack Integration</p>
            </div>
            <div className="team-member">
              <h4>Revanth</h4>
              <p>🎨 Frontend Development</p>
            </div>
            <div className="team-member">
              <h4>Sindhu</h4>
              <p>✨ UI/UX & Animations</p>
            </div>
            <div className="team-member">
              <h4>Bhargavi</h4>
              <p>🔍 Testing & Quality</p>
            </div>
          </div>
        </section>

        <section>
          <h2>📬 Contact Us</h2>
          <p>
            Facing issues or have feedback? Visit the <strong>Contact Us</strong> page to reach out to our team.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default About;

