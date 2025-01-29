import { useState } from "react";
import axios from "axios";

const Delete = () => {
  const [inputData, setInputData] = useState({
    meterId: '',
    fromDate: '',
    toDate:''
  });

  const [responseMess, setResponseMess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData(prev => ({
      ...prev, [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete('http://localhost:3000/meter/delete', {
        data: inputData,
      });
      setResponseMess(response.data.message || "Data deleted");
      console.log(response);
    } catch (error) {
      console.log(`Error:`, error);
      setResponseMess(`Error in deletion: ${error}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={submitHandler} className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Delete Meter Data</h2>

        <div className="mb-4">
          <label htmlFor="meterId" className="block text-sm font-medium text-gray-700 mb-1">Meter ID</label>
          <input
            id="meterId"
            name="meterId"
            onChange={handleChange}
            type="text"
            value={inputData.meterId}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Meter ID"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
          <input
            id="fromDate"
            name="fromDate"
            onChange={handleChange}
            value={inputData.fromDate}
            max={inputData.toDate}
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Date"
          />

          <label htmlFor="toDate" className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
          <input
            id="toDate"
            name="toDate"
            onChange={handleChange}
            value={inputData.toDate}
            min={inputData.fromDate}
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Date"
          />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-200">
          Submit
        </button>
      </form>

      {responseMess && (
        <div className="text-center mt-4 text-gray-700">
          {responseMess}
        </div>
      )}
    </div>
  );
};

export default Delete;
