import { useState } from "react";
import axios from 'axios'
const GetConstraints = () => {
    
    const [input,setInput] = useState({
        meterId:'',
        fromDate:'',
        toDate:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev=>({
            ...prev,[name]:value,
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(input);
        
        try {
            const response = await axios.get('http://localhost:3000/meter/get/const',{       params: input            
             })
             
             console.log(response);
        } catch (error) {
            console.error("Error :", error);
        }
        
    }

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">Constraints Form</h2>
  
          <div className="mb-4">
            <label htmlFor="meterId" className="block text-sm font-medium text-gray-700 mb-1">
              Meter ID
            </label>
            <input
              id="meterId"
              type="number"
              name='meterId'
              min='0'
              onChange={handleChange}
              value={input.meterId}
              // required
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
              required
              max={input.toDate}
              onChange={handleChange}
              name='fromDate'
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
              name='toDate'
              required
              min={input.fromDate}
              onChange={handleChange}
              value={input.toDate}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default GetConstraints;