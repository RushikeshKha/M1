import React from 'react'


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement
  );

const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        position: "top"
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart"
      }
    }
  };

function BarChart({chartdata}) {
    
  return (
    <>
    <Bar options={options} data={chartdata} />
    </>
  )
}

export default BarChart