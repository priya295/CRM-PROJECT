import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
 
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold'> Logins </h1>
      <div className='mt-10'>
      <button className='bg-[#511992] text-white p-5 rounded-lg px-5 font-semibold text-[20px]'> <Link to="/superadmin/login">Super Admin Login</Link> </button>
       </div>
    </div>
  );
};

export default Home;
