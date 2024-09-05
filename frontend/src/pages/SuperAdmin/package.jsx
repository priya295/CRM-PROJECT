import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { TiPlus } from "react-icons/ti";
import {Link} from "react-router-dom";

const Package = () => {
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Example fetch function to demonstrate setting error
//     const fetchData = async () => {
//       try {
//         // Replace with your API endpoint
//         const response = await fetch('http://localhost:5000/api/data');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         // Handle the response data if needed
//       } catch (err) {
//         setError(err.message || 'An error occurred');
//       }
//     };

//     fetchData();
//   }, [])

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1" style={{ flex: 1 }}>
        <Header />
      <div className="mx-auto p-6 float-end mt-5 w-[78%]">
            <div className='flex flex-wrap ms-2'>
                <div className='w-[80%]'>
            <h1 className='font-semibold text-[25px]'>Packages</h1>
            </div>
            <div className='w-[20%] float-right'>
            <button className='text-white bg-[#511992] p-2 px-5 rounded flex items-center text-center gap-2'>
            <TiPlus className='text-[20px]'/>  <Link to="/superadmin/create_package" > Create Package </Link> 
            </button>
            </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Package;
