import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import { FaList } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Subscription = () => {
  const [subscription, setSubscription] = useState("");
  const [name, setName] = useState("");
  const [selectpackage, setSelectpackage] = useState("");
  const [plan, setPlan] = useState("");
  const [selecttenure, setSelecttenure] = useState("");
  const [date, setDate] = useState("");
  const [enddate, setEndDate] = useState("");
  const [price, setPrice] = useState("");
  const [payment, setPayment] = useState("");
  const [packages, setPackages] = useState([]);
  const [tenureOptions, setTenureOptions] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("http://localhost:8000/package/packages");
        const data = await response.json();
        console.log("Fetched packages:", data); // Inspect the data structure
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  const handlePackageChange = (e) => {
    const selectedPackageName = e.target.value;
    console.log("Selected Package Name:", selectedPackageName);
    setSelectpackage(selectedPackageName);
  
    const selectedPackage = packages.find(pkg => pkg.packageName === selectedPackageName);
    console.log("Selected Package Object:", selectedPackage);
  
    if (selectedPackage && Array.isArray(selectedPackage.plan_id)) {
      // Extract the tenures from the plan_id array
      const tenures = selectedPackage.plan_id.map(plan => plan.tenure);
      console.log("Extracted Tenures:", tenures);
      setTenureOptions(tenures);
    } else {
      console.log("plan_id is not an array or package not found.");
      setTenureOptions([]);
    }
  };
  

  const addproduct = async (e) => {
    e.preventDefault();
    console.log('Submitting form with:', {
      subscription,
      name,
      selectpackage,
      plan,
      selecttenure,
      date,
      enddate,
      payment,
      price,
    });

    try {
      const result = await fetch("http://192.168.1.32:8000/api/v1/sub/createsub", {
        method: "POST",
        body: JSON.stringify({
          subscription,
          name,
          packagetitle: selectpackage,
          plantype: plan,
          tenure: selecttenure,
          startdate: date,
          enddate,
          paymenttype: payment,
          price,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      console.log('Response:', data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="flex-1">
          <div className="mx-auto p-6 bg-white shadow-md rounded-md mt-5 w-[78%] float-end">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold">Create Subscriptions</h1>
              <button className="flex items-center gap-2 bg-[#511992] text-white px-4 py-2 rounded-md">
                <FaList/> <Link to="/superadmin/subscription">  Subscriptions </Link>
              </button> 
            </div>
            <form onSubmit={addproduct}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">Subscriptions</label>
                  <select
                    className="w-full mt-2 p-2 border rounded-md"
                    value={subscription}
                    onChange={(e) => setSubscription(e.target.value)}
                  >
                    <option value="">Select Subscription</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Fourth">Fourth</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-2 border rounded-md"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700">Select Package</label>
                  <select
                    className="w-full mt-2 p-2 border rounded-md"
                    value={selectpackage}
                    onChange={handlePackageChange}
                  >
                    <option value="">Select Package</option>
                    {packages.map((pkg) => (
                      <option key={pkg._id} value={pkg.packageName}>
                        {pkg.packageName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Plan Type</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-2 border rounded-md"
                    placeholder="Plan Type"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Select Packages Tenure</label>
                  <select
                    className="w-full mt-2 p-2 border rounded-md"
                    value={selecttenure}
                    onChange={(e) => setSelecttenure(e.target.value)}
                  >
                    <option value="">Select Packages Tenure</option>
                    {tenureOptions.map((tenure, index) => (
                      <option key={index} value={tenure}>
                        {tenure}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700">Start Date</label>
                  <input
                    type="date"
                    className="w-full mt-2 p-2 border rounded-md"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">End Date</label>
                  <input
                    type="date"
                    className="w-full mt-2 p-2 border rounded-md"
                    value={enddate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-gray-700">Select Payment Method</label>
                  <select
                    className="w-full mt-2 p-2 border rounded-md"
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Google Pay">Google Pay</option>
                    <option value="Paytm">Paytm</option>
                    <option value="Phone Pay">Phone Pay</option>
                    {/* Add other payment options here */}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Price</label>
                  <input
                    type="number"
                    className="w-full mt-2 p-2 border rounded-md"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-6 w-[10%]">
                <button
                  type="submit"
                  className="w-full bg-[#511992] text-white p-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
