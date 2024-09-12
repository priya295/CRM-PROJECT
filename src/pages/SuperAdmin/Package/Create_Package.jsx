import React, { useState } from 'react'; 
import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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

const Create_package = () => {
  
  const navigate = useNavigate();
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tenure,
          months,
          rate,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Plan created successfully');
        setPlans(prevPlans => [
          ...prevPlans,
          { _id: data._id, tenure: data.tenure, months: data.months, rate: data.rate }
        ]);
        setSelectedPlan(data._id);
      } else {
        alert(data.message || 'Failed to create plan');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeletePlan = async (planId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/delete_plan/${planId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Plan deleted successfully');
        setPlans(plans.filter(plan => plan._id !== planId));
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to delete plan');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/add_package', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
          plan_id: selectedPlan,
          description,
          modules: selectedModules,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/superadmin/package');
        alert('Package created successfully');
        // Optionally, reset the form fields here
      } else {
        alert(data.message || 'Failed to create package');
      }
    } catch (error) {
      console.error('Error:', error);
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
          <h2 className="text-2xl font-semibold mb-6">Create Package</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                <label className="block text-gray-700">Storage Unit</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={storageUnit}
                    onChange={(e) => setStorageUnit(e.target.value)}
                    placeholder="Leave it blank to allow unlimited storage"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <select
                    value={storageUnitType}
                    onChange={(e) => setStorageUnitType(e.target.value)}
                    className="mt-1 block px-4 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select unit</option>
                    <option value="MB">MB</option>
                    <option value="GB">GB</option>
                  </select>
                </div>
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
            </div>
            <div className="grid grid-cols-3 gap-6">
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
            <div className="grid grid-cols-4 gap-3 bg-gray-200 p-4 rounded">
              <div className=''>
                <h1> Tenure </h1>
              </div>
              <div className=''>
                <h1> Months </h1>
              </div>
              <div className=''>
                <h1> Rate </h1>
              </div>
              <div className=''>
                <h1> Action </h1>
              </div>
              </div>
            <div className="grid grid-cols-4 gap-3">
              <div>
                <input
                  type="text"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <select
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select months</option>
                  {generateMonthOptions(24)} {/* Adjust as needed */}
                </select>
              </div>
              <div>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <button
              type="button"
              onClick={addPlan}
              className="text-center p-2 mt-1 bg-green-700 text-white rounded-md"
            >
              <FaPlus/> 
            </button>
              </div>
            </div>
            <div className="mt-2">
              <ul className="list-disc">
                {plans.map((plan) => (
                  <li key={plan._id} className="grid grid-cols-4 mb-2 gap-3">
                    <div className='border p-2 rounded'>{plan.tenure}</div>
                    <div className='border p-2 rounded'>{plan.months}</div>
                    <div className='border p-2 rounded'>{plan.rate}</div>
                    <div>
                <button
              type="button"
              onClick={() => handleDeletePlan(plan._id)}
              className="text-center p-2 mt-1 bg-red-600 text-white rounded-md"
            >
              <FaTrash />
            </button>
              </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Modules *</label>
              <div className="flex items-center space-x-2">
                <ToggleSwitch
                  isOn={selectAll}
                  handleToggle={handleSelectAllToggle}
                />
                <span className="text-gray-700">Select All</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {modulesList.map((module) => (
                  <div key={module} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedModules.includes(module)}
                      onChange={() => handleModuleChange(module)}
                      id={module}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor={module} className="text-gray-700">{module}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit Package
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create_package;
