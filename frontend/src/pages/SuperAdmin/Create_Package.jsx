import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Create_package = () => {
  const modulesList = [
    'Projects', 'Finance', 'Leave Requests', 'Notifications', 'Time Tracker',
    'Knowledgebase', 'Tasks', 'Users', 'Notes', 'SMS Notifications', 'Leads',
    'Payslip', 'Calendar', 'Clients', 'Mail', 'Meetings', 'Todos', 'Gantt Chart',
    'Chat', 'Activity Logs', 'Announcements', 'Support System', 'Contracts', 'Statuses'
  ];

  const [packageName, setPackageName] = useState('');
  const [packageNo, setPackageNo] = useState('');
  const [noOfProjects, setNoOfProjects] = useState('');
  const [noOfEmployes, setNoOfEmployes] = useState('');
  const [noOfClients, setNoOfClients] = useState('');
  const [ValidityTerm, setValidityTerm] = useState('');
  const [storageUnit, setStorageUnit] = useState('');
  const [planType, setPlanType] = useState('Paid');
  const [tenure, setTenure] = useState('');
  const [months, setMonths] = useState('');
  const [description, setDescription] = useState('');
  const [selectedModules, setSelectedModules] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllToggle = (checked) => {
    setSelectAll(checked);
    setSelectedModules(checked ? modulesList : []);
  };

  const handleModuleChange = (module) => {
    if (selectedModules.includes(module)) {
      setSelectedModules(selectedModules.filter(m => m !== module));
    } else {
      setSelectedModules([...selectedModules, module]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/package/create_package', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          packageName,
          packageNo,
          noOfProjects,
          noOfEmployes,
          storageUnit,
          planType,
          noOfClients,
          ValidityTerm,
          description,
          modules: selectedModules,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Package created successfully');
        // Optionally, reset the form fields here
      } else {
        alert(data.message || 'Failed to create package');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1" style={{ flex: 1 }}>
        <Header />
      <div className="flex-1">
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
                  value={noOfProjects}
                  onChange={(e) => setNoOfProjects(e.target.value)}
                  placeholder="Leave it blank to allow unlimited projects"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700">No. of Employes *</label>
                <input
                  type="number"
                  value={noOfEmployes}
                  onChange={(e) => setNoOfEmployes(e.target.value)}
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
                    value={storageUnit}
                    onChange={(e) => setStorageUnit(e.target.value)}
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
                  value={noOfClients}
                  onChange={(e) => setNoOfClients(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700">Package  <span className='text-red-600'>*</span></label>
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
                  value={noOfProjects}
                  onChange={(e) => setNoOfProjects(e.target.value)}
                  placeholder="Leave it blank to allow unlimited projects"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Description *</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                rows="3"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700">Modules</label>
              <div className="flex items-center my-4">
                <input
                  type="checkbox"
                  id="selectAll"
                  checked={selectAll}
                  onChange={() => handleSelectAllToggle(!selectAll)}
                  className="mr-2"
                />
                <label htmlFor="selectAll" className="text-gray-700">{selectAll ? 'Deselect All' : 'Select All'}</label>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-2">
                {modulesList.map(module => (
                  <div key={module} className="flex items-center">
                    <input
                      type="checkbox"
                      id={module}
                      checked={selectedModules.includes(module)}
                      onChange={() => handleModuleChange(module)}
                      className="mr-2"
                    />
                    <label htmlFor={module} className="text-gray-700">{module}</label>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md">
              Create Package
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Create_package;
