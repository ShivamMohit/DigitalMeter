// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Get() {
//   const [meterData, setMeterData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/meter/get');
//         // console.log(Array.isArray(response.data.data));  
//         console.log(response);
        
//           const meterList = response.data.map(ele => ({
//             _id: ele._id,
//             meterId: ele.meterId,
//             date: ele.date,
//             consumption: ele.consumption
//           }));

//           setMeterData(meterList);

//       } catch (error) {

//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {meterData.length > 0 ? (

//         meterData.map((ele, index) => (

//           <div className='p-2' key={index}>
//             <h3>ID: {ele._id}</h3>
//             <p>Meter ID: {ele.meterId}</p>
//             <p>Consumption: {ele.consumption}</p>
//             <p>Date: {ele.date}</p>
//           </div>

//         ))
//       ) : (
//         <p>No meter data available.</p>
//       )
//     }
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Get() {
  const [meterData, setMeterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/meter/get');
        console.log(response);

        const meterList = response.data.map(ele => ({
          _id: ele._id,
          meterId: ele.meterId,
          date: ele.date,
          consumption: ele.consumption
        }));

        setMeterData(meterList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: meterData.map(ele => new Date(ele.date).toLocaleDateString()), // Map dates to labels
    datasets: [
      {
        label: 'Consumption',
        data: meterData.map(ele => ele.consumption), // Map consumption data
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        tension: 0.2,
      },
    ],
  };

  // Chart options (optional)
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Consumption vs Date',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Consumption',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div>
        <h2>Meter Data</h2>
        {meterData.length > 0 ? (
          <div>
            {meterData.map((ele, index) => (
              <div className='p-2' key={index}>
                <h3>ID: {ele._id}</h3>
                <p>Meter ID: {ele.meterId}</p>
                <p>Consumption: {ele.consumption}</p>
                <p>Date: {ele.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No meter data available.</p>
        )}
      </div>

      {/* Chart displaying consumption vs date */}
      <div>
        <h3>Consumption vs Date</h3>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
