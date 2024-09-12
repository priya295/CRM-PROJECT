import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import flowchangerailogo from '../images/logo.png';

const Sidebar = () => {
    const location = useLocation();
    
    return (
        <div className="fixed bg-[#363740] h-screen w-[20%] flex flex-col items-start p-4 text-white">
            {/* Logo */}
            <div className="flex mb-6">
            <img src={flowchangerailogo} alt='Flowchange Rail Logo' className='w-[200px]' /> 
            </div>

            {/* Sidebar Items */}
            <div className="w-full text-center">
                {/* User */}
                <Link
                    to="/superadmin/dashboard"
                    className={`flex items-center p-2 rounded mb-2 cursor-pointer ${
                        location.pathname === '/superadmin/dashboard' ? 'bg-[#9FA2B4] text-white' : 'hover:text-white hover:bg-[#9FA2B4]'
                    }`}>  
                    {/* <img src={user} /> */}
                    <span>Dashboard</span>
                </Link>

                {/* Category */}
                <Link
                    to="/superadmin/package"
                    className={`flex items-center p-2 rounded mb-2 cursor-pointer ${
                        location.pathname === '/superadmin/package' ? 'bg-[#9FA2B4] text-white' : 'hover:text-white hover:bg-[#9FA2B4]'
                    }`}
                >
                    {/* <img src={category} /> */}
                    <span>Package</span>
                </Link>

                {/* Sub Category */}
                <Link
                    to="/superadmin/subscription"
                    className={`flex items-center p-2 rounded mb-2 cursor-pointer ${
                        location.pathname === '/superadmin/subscription' ? 'bg-[#9FA2B4] text-white' : 'hover:text-white hover:bg-[#9FA2B4]'
                    }`}
                >
                    {/* <img src={subcategory} /> */}
                    <span>Subscriptions</span>
                </Link>

 {/* header footer  */}

 <Link
                    to="/header_footer"
                    className={`flex items-center p-2 rounded mb-2 cursor-pointer ${
                        location.pathname === '/subcategory' ? 'bg-[#9FA2B4] text-white' : 'hover:text-white hover:bg-[#9FA2B4]'
                    }`}> 
                    {/* <img src={headerfooter} /> */}
                    <span>Users</span>
                </Link>

                {/* Plan */}
                <Link
                    to="/plan"
                    className={`flex items-center p-2 rounded cursor-pointer ${
                        location.pathname === '/plan' ? 'bg-[#9FA2B4] text-white' : 'hover:text-white hover:bg-[#9FA2B4]'
                    }`}> 
                    {/* <img src={plan} /> */}
                    <span>Settings</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
