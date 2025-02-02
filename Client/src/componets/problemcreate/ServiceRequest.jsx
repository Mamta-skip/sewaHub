import React, { useState } from 'react';
import axios from 'axios';

const ServiceRequest = () => {
  const [serviceCategory, setServiceCategory] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [location, setLocation] = useState('');
  const [serviceCharge, setServiceCharge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceData = {
      serviceCategory,
      ServiceDescription: serviceDescription,
      location,
      serviceCharge,
    };

    try {
      const response = await axios.post('http://localhost:8000/createServicerequest',
         serviceData,
      {  headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"), 
      }// Ensure you're sending the token in the Authorization header
          },
      );
      alert(response.data.message);
      // Clear form fields after submission
      setServiceCategory('');
      setServiceDescription('');
      setLocation('');
      setServiceCharge('');
    } catch (error) {
      alert(error.response.data.message || 'An error occurred while creating the service');
    }
  };

  return (
    <div>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Create Service Request 
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          "Provide the details below to post your work request and connect with service providers."          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="service-category"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Service Category
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="service-category"
                  id="service-category"
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="service-description"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Service Description
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="service-description"
                  id="service-description"
                  value={serviceDescription}
                  onChange={(e) => setServiceDescription(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Location
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="service-charge"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Service Charge
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="service-charge"
                  id="service-charge"
                  value={serviceCharge}
                  onChange={(e) => setServiceCharge(e.target.value)}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequest;
