// import React from 'react'

import axios from "axios";
import { useState } from "react";

const Delete = () => {
    const [inputData,setInputData] = useState({
        meterId:'',
        date:''
    })

    const [responseMess,setResponseMess] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData(prev => ({
            ...prev,[name]:value,
        }))
    }

    const submitHandler = async (e) => {
            e.preventDefault();
            try {
                const response= await axios.delete('http://localhost:3000/meter/delete',{
                    data: inputData
                });
                setResponseMess(response.data.message || "Data deleted");
                console.log(response);
                
            } catch (error) {
                console.log(`Error:`,error);   
                setResponseMess(`Error in deletion: ${error}`);             
            }
    }

  return (
    <>
        <div className='grid sm:grid-cols-12 '>
            <div className='sm:col-start-4 sm:col-span-5 flex flex-col '>
                <form onSubmit={submitHandler}>
                    Meter ID:<input name='meterId' 
                    onChange={handleChange}
                    type='text' 
                    value={inputData.meterId}
                    className="bg-slate-200 focus:outline-0 px-2 py-1 rounded-xl"/>
                    <br/>
                    Date:<input name='date' type='datetime-local' 
                    onChange={handleChange}
                    value={inputData.date}
                    className="bg-slate-200 focus:outline-0 ml-9 m-2 px-2 py-1 rounded-xl"  />
                    <br/>
                    <button  className="bg-gray-400 p-2 rounded-2xl" type="submit">
                        Submit
                    </button>
                </form>
            </div>
            {
                responseMess 
            }
        </div>
    </>
  )
}

export default Delete;
