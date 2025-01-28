// import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const handleInsert = () => {
        // e.preventDefault();
        navigate('/insert');        
    }

    const handleGet = () =>{
        navigate('/get');
    }
    const handleDelete = () =>{
        navigate('/delete');
    }

  return (
    <>
        <div>
            <div className=''>
                <button className='m-2'
                onClick={handleInsert}
                >Insert</button>
                <button className='m-2'
                onClick={handleGet}
                >Get</button>
                <button className='m-2' onClick={handleDelete}>Delete</button>
                <button className='m-2'> Update</button>
            </div>
        </div>
    </>
  )
}
