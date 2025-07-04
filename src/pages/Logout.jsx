import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert("✅ Logged out successfully!");
    navigate('/'); // or navigate('/login')
  }, [navigate]);

  return null;
};

export default Logout;
