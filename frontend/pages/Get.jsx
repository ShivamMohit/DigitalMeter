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
    <div className="p-4">
      {/* <h2 className="text-2xl font-bold mb-4">Meter Data</h2> */}

      {/* Display Meter Data */}
      {/* {meterData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {meterData.map((ele, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="font-semibold">ID: {ele._id}</h3>
              <p>Meter ID: {ele.meterId}</p>
              <p>Consumption: {ele.consumption}</p>
              <p>Date: {new Date(ele.date).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No meter data available.</p>
      )} */}

      {/* Chart displaying consumption vs date */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Consumption vs Date</h3>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
