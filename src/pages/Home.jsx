import React, { useEffect, useState } from 'react';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/superadmin/superadmin', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          const errData = await response.json();
          setError(errData.message || 'Failed to fetch users');
        }
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('An error occurred while fetching users');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Registered Users</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
