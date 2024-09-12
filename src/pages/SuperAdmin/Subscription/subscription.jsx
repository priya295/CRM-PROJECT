import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import {Link} from "react-router-dom";

const SubscriptionList = () => {
    return (
        <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="flex-1">
        <div className="mx-auto p-6 bg-white shadow-md rounded-md mt-5 w-[78%] float-end">
            <div className='bg-white shadow-md rounded-lg p-4'>
                <div className='flex'>
                    <div className='w-[80%]'>
                <h2 className='text-2xl font-bold mb-4'>Data List</h2>
                </div>
                <div className='w-[20%]'>
                <button className="flex items-center gap-2 bg-[#511992] text-white px-4 py-2 rounded-md">
                 <Link to="/superadmin/create_subscription"> Create Subscriptions </Link>
              </button> 
              </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-200">Subscription</th>
                                <th className="px-4 py-2 border border-gray-200">Full Name</th>
                                <th className="px-4 py-2 border border-gray-200">Package</th>
                                <th className="px-4 py-2 border border-gray-200">Plan Type</th>
                                <th className="px-4 py-2 border border-gray-200">Package Tenure</th>
                                <th className="px-4 py-2 border border-gray-200">Start Date</th>
                                <th className="px-4 py-2 border border-gray-200">End Date</th>
                                <th className="px-4 py-2 border border-gray-200">Payment Method</th>
                                <th className="px-4 py-2 border border-gray-200">Price</th>
                                <th className="px-4 py-2 border border-gray-200">Data Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-200 text-center">1</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">Piyush Loona</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">25000</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">Active</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">1</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">01-09-2000</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">01-09-2000</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">Phone Pay</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">1</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">
                                    <div className='flex justify-center space-x-2'>
                                        <button className="text-red-500 hover:text-red-700"><MdDelete /></button>
                                        <button className="text-blue-500 hover:text-blue-700"><MdEdit /></button>
                                        {/* <button className="text-green-500 hover:text-green-700"><SecurityUpdateOutlinedIcon /></button> */}
                                    </div>
                                </td>
                            </tr>

                            {/* Repeat the same structure for other rows */}
                            <tr className="bg-white hover:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-200 text-center">1</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">Piyush Loona</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">25000</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">Active</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">1</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">01-09-2000</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">01-09-2000</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">Phone Pay</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">1</td>
                                <td className="px-4 py-2 border border-gray-200 text-center">
                                    <div className='flex justify-center space-x-2'>
                                        <button className="text-red-500 hover:text-red-700"><MdDelete /></button>
                                        <button className="text-blue-500 hover:text-blue-700"><MdEdit /></button>
                                        {/* <button className="text-green-500 hover:text-green-700"><SecurityUpdateOutlinedIcon /></button> */}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default SubscriptionList;
