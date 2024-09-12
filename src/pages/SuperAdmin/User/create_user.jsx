import React from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";

const CreateUsers = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <div className="mx-auto p-6 bg-white shadow-md rounded-md mt-5 w-[78%] float-end">
      <h1 class="text-2xl">Create User</h1>

              <div class="mx-auto w-[30%]">
                <div class="flex border-2 w-[100%] h-[40px] rounded mt-5">
                  <label class="block">
                    <span class="sr-only">Choose file</span>
                    <input
                      type="file"
                      class="block w-full text-sm text-gray-500 border-[#DBDCDE] bg-[#F4F5F9] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-gray-600 hover:file:bg-gray-700"
                    />
                  </label>
                </div>
              </div>

              <form className="mt-5">
                  <div class="flex flex-wrap w-[100%]">
                    <div className="w-[32%] mx-auto">
                      <label class="text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="w-[32%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="w-[32%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Email id
                      </label>
                      <input
                        type="email"
                        placeholder="john@gmail.com"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                    </div>
              <div className="flex flex-wrap w-[100%] mt-5">
                    <div className="w-[32%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Contact number
                      </label>
                      <input
                        type="tel"
                        placeholder="John"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="w-[32%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Date of birth
                      </label>
                      <input
                        type="date"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="w-[32%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Date of joining
                      </label>
                      <input
                        type="date"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap w-[100%] mt-5">
                      <div class="w-[48%] mx-auto">
                        <label class="text-sm font-medium text-gray-700">
                          Gender
                        </label>
                        <div class="flex space-x-4 mt-2">
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              class="form-radio text-indigo-600"
                            />
                            <span class="ml-2">Male</span>
                          </label>
                          <label class="inline-flex items-center">
                            <input
                              type="radio"
                              name="gender"
                              class="form-radio text-indigo-600"
                            />
                            <span class="ml-2">Female</span>
                          </label>
                        </div>
                      </div>

                    <div className="w-[48%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Designation
                      </label>
                      <input
                        type="text"
                        placeholder="Designation"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap w-[100%]">
                    <div className="w-[48%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="address"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="w-[48%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="city"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap w-[100%]">
                    <div className="w-[32%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="state"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="w-[32%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Zip Code
                      </label>
                      <input
                        type="number"
                        placeholder="zip code"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="w-[32%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="country"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap mt-5 w-[100%]">
                    <div className="w-[48%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>

                    <div className="w-[48%] mx-auto">
                      <label class="block text-sm font-medium text-gray-700">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        class="mt-1 p-2 w-[100%] border border-[#DBDCDE] bg-[#F4F5F9] rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>

                <div class="w-[15%] float-end mt-5">
                  <button
                    type="submit"
                    class="bg-[#511992] text-white py-2 px-4 rounded-md shadow hover:bg-purple-700 focus:outline-none"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
  );
};

export default CreateUsers;
