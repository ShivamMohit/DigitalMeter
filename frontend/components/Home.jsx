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
  const handleUpload = () => {
    navigate('/upload');
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
            Graph
          </button>
          
          <button
            onClick={handleGetCons}
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Get
          </button>
          
          <button
            onClick={handleDelete}
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Delete
          </button>

          <button
            onClick={handleUpload}
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-200"
          >
            Upload
          </button>

          
        </div>
      </div>
    </div>
  );
}
