// // import React from 'react'
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//     const navigate = useNavigate();
//     const handleInsert = () => {
//         // e.preventDefault();
//         navigate('/insert');        
//     }

//     const handleGet = () =>{
//         navigate('/get');
//     }
//     const handleGetCons = () =>{
//         navigate('/getc');
//     }
//     const handleDelete = () =>{
//         navigate('/delete');
//     }

//   return (
//     <>
//         <div>
//             <div className=''>
//                 <button className='m-2'
//                 onClick={handleInsert}
//                 >Insert</button>
//                 <button className='m-2'
//                 onClick={handleGet}
//                 >Get</button>
//                 <button className='m-2'
//                 onClick={handleGetCons}
//                 >Get Contraints</button>
//                 <button className='m-2' onClick={handleDelete}>Delete</button>
//                 <button className='m-2'> Update</button>
//             </div>
//         </div>
//     </>
//   )
// }
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleInsert = () => {
    navigate('/insert');
  };

  const handleGet = () => {
    navigate('/get');
  };

  const handleGetCons = () => {
    navigate('/getc');
  };

  const handleDelete = () => {
    navigate('/delete');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6">Home</h2>
        
        <div className="space-y-4">
          <button
            onClick={handleInsert}
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Insert
          </button>
          
          <button
            onClick={handleGet}
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Get
          </button>
          
          <button
            onClick={handleGetCons}
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Get Constraints
          </button>
          
          <button
            onClick={handleDelete}
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Delete
          </button>

          <button
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
