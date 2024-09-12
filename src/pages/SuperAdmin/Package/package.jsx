import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
// import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const Package = () => {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(null);

  // Fetch package data from the API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/get_all_packages'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch package data');
        }
        const data = await response.json();
        setPackages(data);  // Assuming the response is an array of package objects
      } catch (err) {
        setError(err.message || 'An error occurred');
      }
    };

    fetchPackages();
  }, []);

  const handleDotsClick = (index) => {
    setSelectedPackageIndex(index);
    setShowPopup(!showPopup);
  };

  const handleEdit = () => {
    // Implement edit functionality
    console.log('Edit package:', packages[selectedPackageIndex]);
    setShowPopup(false);
  };

  const handleDelete = () => {
    // Implement delete functionality
    console.log('Delete package:', packages[selectedPackageIndex]);
    setShowPopup(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="mx-auto p-6 bg-white shadow-md rounded-md mt-5 w-[78%] float-end">
          <div className='flex justify-between items-center'>
            <h1 className='font-semibold text-[25px]'>Packages</h1>
            <button className='text-white bg-[#511992] p-2 px-5 rounded flex items-center gap-2'>
              {/* <TiPlus className='text-[20px]' />   */}
              <Link to="/superadmin/create_package">Create Package</Link> 
            </button>
          </div>
          
          {/* Display Error if any */}
          {error && <div className="text-red-500 mt-4">{error}</div>}

          {/* Packages Table */}
          <div className="overflow-x-auto mt-5">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-[#511992] text-white">
                <tr>
                  <th className="px-4 py-2 border border-gray-300 text-left">Title</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Storage</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Plan Type</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Modules</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Status</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, index) => (
                  <tr key={pkg._id} className="bg-white hover:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">{pkg.packageName}</td>
                    <td className="px-4 py-2 border border-gray-300">{pkg.storageUnit} ({pkg.storageUnitType})</td>
                    <td className="px-4 py-2 border border-gray-300">
                      <span className={`py-1 px-3 rounded-full text-sm ${
                        pkg.planType === 'Free' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'
                      }`}>
                        {pkg.planType}
                      </span>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {/* Displaying Modules */}
                      <div className="flex flex-wrap gap-2">
                        {pkg.modules.map((module, index) => (
                          <span key={index} className="bg-gray-200 px-2 py-1 rounded">{module}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <span className="py-1 px-3 rounded-full text-sm bg-green-200 text-green-800">{pkg.packageStatus}</span>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <button 
                        className="text-gray-500 hover:text-gray-700 relative"
                        onClick={() => handleDotsClick(index)}
                      >
                        <BsThreeDotsVertical className="text-xl" />
                        {showPopup && selectedPackageIndex === index && (
                          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                            <Link to={`/superadmin/update_package/${pkg._id}`}>
                              <button 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                onClick={handleEdit}
                              >
                                Edit
                              </button>
                            </Link>
                            <button 
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                              onClick={handleDelete}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
