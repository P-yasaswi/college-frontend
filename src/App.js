import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import RoleLoginPage from './components/RoleLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import CoordinatorDashboard from './pages/CoordinatorDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import CreateEvent from './pages/CreateEvent';
import ViewEvents from './pages/ViewEvents';
import ViewUsers from './pages/ViewUsers';
import ViewFeedback from './pages/ViewFeedback';
import AdminAnnouncements from './pages/AdminAnnouncements';
import SearchEvents from './pages/SearchEvents';
import MyEvents from './pages/MyEvents';
import RegisterEvent from './pages/RegisterEvent';
import GiveFeedback from './pages/GiveFeedback';
import CreateClub from './pages/CreateClub';
import AdminEvents from './pages/AdminEvents';
import About from './pages/About';
import Contact from './pages/Contact';






function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/" element={<RoleLoginPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/coordinator" element={<CoordinatorDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/admin/create-event" element={<CreateEvent />} />
          <Route path="/admin/view-events" element={<ViewEvents />} />
          <Route path="/admin/view-users" element={<ViewUsers />} />
          <Route path="/admin/view-feedback" element={<ViewFeedback />} />
          <Route path="/admin/announcements" element={<AdminAnnouncements />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/search-events" element={<SearchEvents />} />
          <Route path="/student/my-events" element={<MyEvents />} />
          <Route path="/student/register" element={<RegisterEvent />} />
          <Route path="/student/feedback" element={<GiveFeedback />} />
          <Route path="/create-club" element={<CreateClub />} />
          <Route path="/admin-events" element={<AdminEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

      

        </Routes>
      )}
    </Router>
  );
}

export default App;




