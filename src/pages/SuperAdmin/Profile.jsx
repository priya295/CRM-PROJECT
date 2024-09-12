import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Profile = () => {
  const [error, setError] = useState('');

  useEffect(() => {
    // Example fetch function to demonstrate setting error
    const fetchData = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch('http://localhost:8000/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Handle the response data if needed
      } catch (err) {
        setError(err.message || 'An error occurred');
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once

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

export default Profile;
