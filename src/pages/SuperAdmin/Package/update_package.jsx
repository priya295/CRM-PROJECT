import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import { FaPlus, FaTrash } from 'react-icons/fa';

const ToggleSwitch = ({ isOn, handleToggle }) => (
  <div
    onClick={() => handleToggle(!isOn)}
    className={`cursor-pointer relative inline-flex items-center h-6 rounded-full w-11 ${
      isOn ? 'bg-blue-600' : 'bg-gray-400'
    }`}
  >
    <span
      className={`transform transition-transform inline-block w-6 h-6 rounded-full bg-white ${
        isOn ? 'translate-x-5' : 'translate-x-0'
      }`}
    />
  </div>
);

const UpdatePackage = () => {
  const { packageId } = useParams(); // Get packageId from route parameters

  const modulesList = [
    'Projects', 'Finance', 'Leave Requests', 'Notifications', 'Time Tracker',
    'Knowledgebase', 'Tasks', 'Users', 'Notes', 'SMS Notifications', 'Leads',
    'Payslip', 'Calendar', 'Clients', 'Mail', 'Meetings', 'Todos', 'Gantt Chart',
    'Chat', 'Activity Logs', 'Announcements', 'Support System', 'Contracts', 'Statuses'
  ];

  const [packageName, setPackageName] = useState('');
  const [packageNo, setPackageNo] = useState('');
  const [numOfProjects, setNumOfProjects] = useState('');
  const [numOfEmployes, setNumOfEmployes] = useState('');
  const [numOfClients, setNumOfClients] = useState('');
  const [storageUnit, setStorageUnit] = useState('');
  const [storageUnitType, setStorageUnitType] = useState('');
  const [planType, setPlanType] = useState('Paid');
  const [packageStatus, setPackageStatus] = useState('Active');
  const [tenure, setTenure] = useState('');
  const [months, setMonths] = useState('');
  const [rate, setRate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedModules, setSelectedModules] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/get_package/${packageId}`);
        console.log("response");
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch package data');
        }
        const data = await response.json();
        setPackageName(data.packageName);
        setPackageNo(data.packageNo);
        setNumOfProjects(data.numOfProjects);
        setNumOfEmployes(data.numOfEmployes);
        setNumOfClients(data.numOfClients);
        setStorageUnit(data.storageUnit);
        setStorageUnitType(data.storageUnitType);
        setPlanType(data.planType);
        setPackageStatus(data.packageStatus);
        setDescription(data.description);
        setSelectedModules(data.modules || []);
        setSelectedPlan(data.plan_id || '');

        const plansResponse = await fetch(`http://localhost:8000/api/get_plans/${packageId}`);
        console.log("planresponse");
        console.log(plansResponse);
        if (!plansResponse.ok) {
          throw new Error('Failed to fetch plans');
        }
        const plansData = await plansResponse.json();
        setPlans(plansData);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchPackageData();
  }, [packageId]);

  const handleSelectAllToggle = (checked) => {
    setSelectAll(checked);
    setSelectedModules(checked ? modulesList : []);
  };

  const handleModuleChange = (module) => {
    setSelectedModules(prevSelectedModules =>
      prevSelectedModules.includes(module)
        ? prevSelectedModules.filter(m => m !== module)
        : [...prevSelectedModules, module]
    );
  };

  const addPlan = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/create_plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tenure, months, rate }),
      });
      if (!response.ok) {
        throw new Error('Failed to create plan');
      }
      const data = await response.json();
      alert('Plan created successfully');
      setPlans(prevPlans => [
        ...prevPlans,
        { _id: data._id, tenure: data.tenure, months: data.months, rate: data.rate }
      ]);
      setSelectedPlan(data._id);
    } catch (error) {
      alert('Error:', error.message);
    }
  };

  const handleDeletePlan = async (planId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/delete_plan/${planId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete plan');
      }
      alert('Plan deleted successfully');
      setPlans(plans.filter(plan => plan._id !== planId));
    } catch (error) {
      alert('Error:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/api/update_package/${packageId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageName,
          packageNo,
          numOfProjects,
          numOfEmployes,
          storageUnit,
          storageUnitType,
          planType,
          packageStatus,
          numOfClients,
          description,
          modules: selectedModules,
          plan_id: selectedPlan,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update package');
      }
      alert('Package updated successfully');
    } catch (error) {
      alert('Error:', error.message);
    }
  };

  const generateMonthOptions = (maxMonths) => {
    return Array.from({ length: maxMonths }, (_, i) => i + 1).map(month => (
      <option key={month} value={month}>{month}</option>
    ));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="mx-auto p-6 bg-white shadow-md rounded-md mt-5 w-[78%] float-end">
          <h2 className="text-2xl font-semibold mb-6">Update Package</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700">Package Name <span className='text-red-600'>*</span></label>
                <input
                  type="text"
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Package No. *</label>
                <input
                  type="text"
                  value={packageNo}
                  onChange={(e) => setPackageNo(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">No. Of Projects *</label>
                <input
                  type="number"
                  value={numOfProjects}
                  onChange={(e) => setNumOfProjects(e.target.value)}
                  placeholder="Leave it blank to allow unlimited projects"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700">No. of Employees *</label>
                <input
                  type="number"
                  value={numOfEmployes}
                  onChange={(e) => setNumOfEmployes(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">No. of Clients *</label>
                <input
                  type="number"
                  value={numOfClients}
                  onChange={(e) => setNumOfClients(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Storage Unit *</label>
                <input
                  type="text"
                  value={storageUnit}
                  onChange={(e) => setStorageUnit(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">Storage Unit Type *</label>
                <input
                  type="text"
                  value={storageUnitType}
                  onChange={(e) => setStorageUnitType(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Plan Type *</label>
                <select
                  value={planType}
                  onChange={(e) => setPlanType(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Paid">Paid</option>
                  <option value="Free">Free</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Package Status *</label>
                <select
                  value={packageStatus}
                  onChange={(e) => setPackageStatus(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="Active">Active</option>
                  <option value="Hide">Hide</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">Modules</label>
              <div className="flex items-center mb-4">
                <ToggleSwitch isOn={selectAll} handleToggle={handleSelectAllToggle} />
                <span className="ml-2 text-gray-600">Select All</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {modulesList.map((module) => (
                  <div key={module} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedModules.includes(module)}
                      onChange={() => handleModuleChange(module)}
                      className="mr-2"
                    />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Plans</h3>
              <form onSubmit={addPlan} className="space-y-4">
                <div className="flex items-center mb-4">
                  <label className="block text-gray-700 w-1/4">Tenure</label>
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="w-3/4 px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <label className="block text-gray-700 w-1/4">Months</label>
                  <select
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className="w-3/4 px-4 py-2 border border-gray-300 rounded-md"
                  >
                    {generateMonthOptions(12)}
                  </select>
                </div>
                <div className="flex items-center mb-4">
                  <label className="block text-gray-700 w-1/4">Rate</label>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-3/4 px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Add Plan
                </button>
              </form>
              <ul className="mt-4">
                {plans.map((plan) => (
                  <li key={plan._id} className="flex items-center justify-between mb-2">
                    <span>{plan.tenure} - {plan.months} months - ${plan.rate}</span>
                    <FaTrash
                      onClick={() => handleDeletePlan(plan._id)}
                      className="text-red-600 cursor-pointer"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Update Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePackage;
