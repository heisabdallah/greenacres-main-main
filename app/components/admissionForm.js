import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    address: '',
    nationality: '',
    helpText: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g. send data to server
    console.log(formData);
  };

    const textField = "col-span-2 md:col-span-1 border p-3 border-gray-100 text-sm"

  return (
    <div className="p-2 py-10 px-10 text-white bg-green-800 md:w-[760px]">
      <h2 className="text-2xl font-bold mb-4 font-roboto">Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2 md:gap-4 2xl:gap-10 font-inter">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={`${textField}`}
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={`${textField}`}
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`${textField}`}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            className={`${textField}`}
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className={`${textField}`}
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            className={`${textField}`}
            value={formData.nationality} 
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="helpText" className="block font-semibold">
            How can we help you?
          </label>
          <textarea
            id="helpText"
            name="helpText"
            className="w-full border p-6 border-gray-800"
            value={formData.helpText}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex items-baseline ">
            <input
                type="checkbox"
                name="agreeToTerms"
                className="mr-2"
                checked={formData.agreeToTerms}
                onChange={handleChange}
            />
            <label className="text-sm tex">
                By submitting this form, I give my consent to <span className='font-semibold'>Green Acres Schools</span> to process my personal information & sensitive personal information for the purpose(s) described in the <span className='text-green-100 font-bold'><a href='#'>Privacy Policy.</a></span>
            </label>
         </div>
        <div className="flex mt-8 justify-center">
          <button
            type="submit"
            className="bg-green-600 font-semibold hover:bg-green-900 text-white w-full py-2 rounded-md"
            disabled={!formData.agreeToTerms}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
