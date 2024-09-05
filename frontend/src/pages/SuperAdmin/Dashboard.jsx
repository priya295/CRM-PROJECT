import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Dashboard = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check token validity and fetch data
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        // No token available, redirect to login
        handleLogout();
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/data', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Pass the token in the request
          },
        });

        if (response.status === 401) {
          // Token has expired or is invalid, logout and redirect to login
          handleLogout();
        } else if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        // Handle the response data if needed
      } catch (err) {
        setError(err.message || 'An error occurred');
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1" style={{ flex: 1 }}>
        <Header />
        <div className="content-area" style={{ padding: '20px' }}>
          <h1>Registered Users</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
