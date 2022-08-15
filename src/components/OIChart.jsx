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

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        pointRadius: 0,
        label: "# of Contract",
        data: [3, 5, 8, 13, 15, 18, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: ["rgba(6, 184, 56, 1)"],
        borderWidth: 4,
        tension: 0.5
      }
    ]
  };
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