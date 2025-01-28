// import React from 'react'

import  { useState } from 'react';
import axios from 'axios';
export default function Insert() {
  // State to store the input value
  const [inputValue, setInputValue] = useState({
        meterId:'',
        date:'',
        consumption:''
  });

  const [responseMessage, setResponseMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setInputValue(prev => ({
        ...prev, [name]:value,
      }))
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const inputdata = {inputValue};
    try {
      const response = await axios.post('http://localhost:3000/meter/insert',inputValue);

      console.log('Form Submitted with value:', inputValue);

      console.log('response', response);

      setResponseMessage(response.data.message || "Data Inserted Successful");
      
    } catch (error) {
      setResponseMessage(`Error in inserting data ${error}`)
    }  

    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <p className=''>Insert</p>

          
          <div className='flex flex-col m-4'>
              
            <input
                id='meterID'
                className="min-w-14 bg-white-200 p-2 border rounded m-2 focused"
                type="number"
                name='meterId'
                value={inputValue.meterId}
                onChange={handleInputChange} // 
                placeholder="Enter meter ID"
            />
            <input
                
                className="min-w-14 bg-white-200 p-2 border rounded m-2"
                type="text"
                name='date'
                value={inputValue.date}
                onChange={handleInputChange} // Binding the input field to state
                placeholder="e.g 2022-11-01 12:34:45"
            />
            <input
                className="min-w-14 bg-white-200 p-2 border rounded m-2"
                type="text"
                name='consumption'
                value={inputValue.consumption}
                onChange={handleInputChange} // Binding the input field to state
                placeholder="Enter consumption"
            />

          </div>
          

          {/* Submit button */}
          <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </fieldset>
      </form>
      <p>

      {
      responseMessage
    }

      </p>
    </div>
  );
}
