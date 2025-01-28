// // import React from 'react'

// import  { useState } from 'react';
// import axios from 'axios';
// export default function Insert() {
//   // State to store the input value
//   const [inputValue, setInputValue] = useState({
//         meterId:'',
//         date:'',
//         consumption:''
//   });

//   const [responseMessage, setResponseMessage] = useState('');

//   // Handle input changes
//   const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setInputValue(prev => ({
//         ...prev, [name]:value,
//       }))
//   };

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // const inputdata = {inputValue};
//     try {
//       const response = await axios.post('http://localhost:3000/meter/insert',inputValue);

//       console.log('Form Submitted with value:', inputValue);

//       console.log('response', response);

//       setResponseMessage(response.data.message || "Data Inserted Successful");
      
//     } catch (error) {
//       setResponseMessage(`Error in inserting data ${error}`)
//     }  

    
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <p className=''>Insert</p>

          
//           <div className='flex flex-col m-4'>
              
//             <input
//                 id='meterID'
//                 className="min-w-14 bg-white-200 p-2 border rounded m-2 focused"
//                 type="number"
//                 name='meterId'
//                 value={inputValue.meterId}
//                 onChange={handleInputChange} // 
//                 placeholder="Enter meter ID"
//             />
//             <input
                
//                 className="min-w-14 bg-white-200 p-2 border rounded m-2"
//                 type="text"
//                 name='date'
//                 value={inputValue.date}
//                 onChange={handleInputChange} // Binding the input field to state
//                 placeholder="e.g 2022-11-01 12:34:45"
//             />
//             <input
//                 className="min-w-14 bg-white-200 p-2 border rounded m-2"
//                 type="text"
//                 name='consumption'
//                 value={inputValue.consumption}
//                 onChange={handleInputChange} // Binding the input field to state
//                 placeholder="Enter consumption"
//             />

//           </div>
          

//           {/* Submit button */}
//           <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
//             Submit
//           </button>
//         </fieldset>
//       </form>
//       <p>

//       {
//       responseMessage
//     }

//       </p>
//     </div>
//   );
// }


import { useState } from 'react';
import axios from 'axios';

export default function Insert() {
  const [inputValue, setInputValue] = useState({
    meterId: '',
    date: '',
    consumption: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue(prev => ({
      ...prev, [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/meter/insert', inputValue);

      console.log('Form Submitted with value:', inputValue);
      console.log('response', response);

      setResponseMessage(response.data.message || "Data Inserted Successfully");

    } catch (error) {
      setResponseMessage(`Error in inserting data ${error}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Insert Meter Data</h2>

        <div className="mb-4">
          <label htmlFor="meterId" className="block text-sm font-medium text-gray-700 mb-1">Meter ID</label>
          <input
            id="meterId"
            name="meterId"
            onChange={handleInputChange}
            value={inputValue.meterId}
            type="number"
            min="0"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Meter ID"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            id="date"
            name="date"
            onChange={handleInputChange}
            value={inputValue.date}
            type="datetime-local"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            // placeholder="e.g 2022-11-01 12:34:45"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="consumption" className="block text-sm font-medium text-gray-700 mb-1">Consumption</label>
          <input
            id="consumption"
            name="consumption"
            onChange={handleInputChange}
            value={inputValue.consumption}
            type="text"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Consumption"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>

      {responseMessage && (
        <div className="text-center mt-4 text-gray-700">
          {responseMessage}
        </div>
      )}
    </div>
  );
}
