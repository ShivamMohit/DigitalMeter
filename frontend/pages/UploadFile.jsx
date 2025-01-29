import React from 'react';

const UploadFile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form action='/upload' method='POST' encType='multipart/form-data' className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Upload File</h2>

        <div className="mb-4">
          <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700 mb-1">Choose File</label>
          <input
            id="profileImage"
            name="profileImage"
            type="file"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-200"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default UploadFile;
