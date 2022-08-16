import React, { useState } from 'react'
import OIChart from './OIChart'
import './Trending.css'
function Trending() {

    const [chartdata, setChartdata] = useState({
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
    })
  return (
    <div className='chart'>
        <OIChart chartdata={chartdata}/>
    </div>
  )
}

export default Trending