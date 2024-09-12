import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

const Header = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/superadmin/login');
        } else {
            const fetchUsers = async () => {
                try {
                    const response = await fetch('http://localhost:8000/api/superadmin', {
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
        }
    }, [navigate]);

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };

    

    const handleLogoutClick = () => {
        localStorage.removeItem('token');
        navigate('/superadmin_login'); // Redirect to login page
        setDropdownOpen(false);
    };

    return (
        <div className="border-b-2 shadow w-[78%] float-end p-5">
            <div className='flex justify-end items-center'>
                {users.length > 0 && (
                    <div className='relative'>
                        <button onClick={handleDropdownToggle} className='flex items-center'>
                            <FaUserCircle size={24} />
                            <span className='ml-2'>{users[0].username}</span>
                            <FaChevronDown size={16} className='ml-1' />
                        </button>
                        {dropdownOpen && (
                            <div className='absolute right-0 mt-2 bg-white text-black border border-gray-300 rounded shadow-lg'>
                                <button className='block px-4 py-2 hover:bg-gray-200 w-full text-left'>
                                    <Link to="/superadmin/profile">
                                    Profile </Link>
                                </button>
                                <button onClick={handleLogoutClick} className='block px-4 py-2 hover:bg-gray-200 w-full text-left'>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
                {error && <p className='text-red-500'>{error}</p>}
            </div>
        </div>
    );
};

export default Header;
