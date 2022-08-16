import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
  );

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          drawBorder: true
        },
        ticks: {
          display: true
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: true
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      },
      elements: {
        point: {
          radius: 1
        }
      }
    }
  };
function OIChart({chartdata}) {
  return (
    <Line options={options} data={chartdata}/>
  )
}

export default OIChart