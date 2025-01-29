import { useState } from "react";
import axios from "axios";

const GetConstraints = () => {
  const [input, setInput] = useState({
    meterId: "",
    fromDate: "",
    toDate: "",
  });
  const [showModal, setShowModal] = useState(false);

  const [responseData, setResponseData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handleGetAll = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.get("http://localhost:3000/meter/get");
            
            setResponseData(response.data);
            setShowModal(true);
        } catch (error) {
          console.error("Error in fetching all data",error);
          
        }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:3000/meter/get/const", {
        params: input,
      });

      setResponseData(response.data);
      setShowModal(true);
      setInput({
        meterId: "",
        fromDate: "",
        toDate: "",
      });
    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Meter Data</h2>

        <div className="mb-4">
          <label htmlFor="meterId" className="block text-sm font-medium text-gray-700 mb-1">
            Meter ID
          </label>
          <input
            id="meterId"
            type="number"
            name="meterId"
            min="0"
            onChange={handleChange}
            value={input.meterId}
            placeholder="Enter Meter ID"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fromDateTime" className="block text-sm font-medium text-gray-700 mb-1">
            From Date
          </label>
          <input
            id="fromDateTime"
            max={input.toDate}
            onChange={handleChange}
            name="fromDate"
            value={input.fromDate}
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="toDateTime" className="block text-sm font-medium text-gray-700 mb-1">
            To Date
          </label>
          <input
            id="toDateTime"
            type="datetime-local"
            name="toDate"
            min={input.fromDate}
            onChange={handleChange}
            value={input.toDate}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
         
          onClick={handleGetAll}
          className="w-[49%]  bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-200"
        >
          Get All
        </button>

        <button
          type="submit"
          className="w-[49%] ml-1 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>

        
      </form>

     
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-100 bg-opacity-50">
          <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-gray-700 hover:text-gray-900"
            >
              X
            </button>
          <div className="bg-white p-6 rounded-lg shadow-lg w-120 max-h-[80vh] overflow-y-auto relative">
            
            {responseData.length > 0 ? (
              <h3 className="text-xl font-semibold text-center mb-4">Response Data</h3>
            ) : (
              <p>Data does not exist</p>
            )}
            {responseData.map((x, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-100 shadow-md rounded-lg">
                <ul>
                  <li>
                    <strong>Meter ID:</strong> {x.meterId}
                  </li>
                  <li>
                    <strong>Consumption:</strong> {x.consumption}
                  </li>
                  <li>
                    <strong>Date:</strong> {x.date}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GetConstraints;
