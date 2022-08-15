
import "./Dashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);




export const options1 = {
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

export const nfcoptions = {
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


export const nfpoptions = {
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

export const bnfcoptions = {
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


export const bnfpoptions = {
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


export const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        display: false
      }
    },
    x: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }
};

export const data = {
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



export default function Dashboard() {

  const [nifty_options, setNifty_options] = useState({
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
const [banknifty_options, setBankNifty_options] = useState({
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
const [nifty_most_ce, setNifty_most_ce] = useState({
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
const [banknifty_most_ce, setBankNifty_most_ce] = useState({
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
const [nifty_most_pe, setNifty_most_pe] = useState({
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
const [banknifty_most_pe, setBankNifty_most_pe] = useState({
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

useEffect(() => {
  fetch('http://192.168.0.103:4000/idxnifty').then(res => res.json().then((chartdata) => {setNifty_options({
      labels:chartdata.time,
      datasets:[{
          label:"OI",
          data:chartdata.oi,
          backgroundColor: ["rgba(5, 106, 200, 1)"],
          borderColor: ["rgba(6, 184, 56, 1)"],
          borderWidth: 0,
          borderRadius: 50,
          barThickness: 10
      }]
    })}))

    fetch('http://192.168.0.103:4000/idxbnifty').then(res => res.json().then((chartdata) => {setBankNifty_options({
      labels:chartdata.time,
      datasets:[{
          label:"OI",
          data:chartdata.oi,
          backgroundColor: ["rgba(5, 106, 200, 1)"],
          borderColor: ["rgba(6, 184, 56, 1)"],
          borderWidth: 0,
          borderRadius: 50,
          barThickness: 10
      }]
    })
  }))

    
    setTimeout(() => {
      fetch('http://192.168.0.103:4000/nfceoi').then(res => res.json().then((chartdata) => {setNifty_most_ce({
        labels:chartdata.strike,
        datasets:[{
            label:"OI",
            data:chartdata.oi,
            backgroundColor: ["rgba(108, 181, 106, 1)"],
            borderColor: ["rgba(6, 184, 56, 1)"],
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 10
        }]
        
      })}
      ))

      fetch('http://192.168.0.103:4000/bnfceoi').then(res => res.json().then((chartdata) => {setBankNifty_most_ce({
        labels:chartdata.strike,
        datasets:[{
            label:"OI",
            data:chartdata.oi,
            backgroundColor: ["rgba(108, 181, 106, 1)"],
            borderColor: ["rgba(6, 184, 56, 1)"],
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 10
        }]
        
      })
      }
      ))
      
    }, 500);
    setTimeout(() => {
      fetch('http://192.168.0.103:4000/nfpeoi').then(res => res.json().then((chartdata) => {setNifty_most_pe({
        labels:chartdata.strike,
        datasets:[{
            label:"OI",
            data:chartdata.oi,
            backgroundColor: ["rgba(220, 112, 112, 1)"],
            borderColor: ["rgba(6, 184, 56, 1)"],
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 10
        }]
        
      })
      }
      ))

      fetch('http://192.168.0.103:4000/bnfpeoi').then(res => res.json().then((chartdata) => {setBankNifty_most_pe({
        labels:chartdata.strike,
        datasets:[{
            label:"OI",
            data:chartdata.oi,
            backgroundColor: ["rgba(220, 112, 112, 1)"],
            borderColor: ["rgba(6, 184, 56, 1)"],
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 10
        }]
        
      })
      }
      ))
    }, 1000);
    
}, [])
  return (
    <div className="container">
      <div className="header-bar">
        <div className="heading">Dashboard</div>
      </div>
      <div className="divide"></div>
      <div className="chartgrp">
        <div className="chart-card" id="nf">
          <div className="tag-tag">
            <div className="tag">
              <h3>Nifty50 Future</h3>
              <div className="exp">EXPIRY: 30 AUG 2022</div>
            </div>
            <div className="price-change">
              <div className="price">15000.35</div>
              <div className="pChange">128.25</div>
              <div className="percent">(1.8%)</div>
            </div>
          </div>
          <div className="nic">
            <Line options={options} data={data} />
          </div>
        </div>
        <div className="chart-card" id="bnf">
          <div className="tag-tag">
            <div className="tag">
              <h3>BankNifty Future</h3>
              <div className="exp">EXPIRY: 30 AUG 2022</div>
            </div>
            <div className="price-change">
              <div className="price">35000.25</div>
              <div className="pChange">128.25</div>
              <div className="percent">(1.2%)</div>
            </div>
          </div>
          <div className="nic">
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
      <div className="chartgrp">
        <div className="chart-card">
          <div className="holder">
            <h3>Nifty Options OI</h3>
            <div className="dnoi">
              <Bar options={options1} data={nifty_options} />
            </div>
          </div>
        </div>
        <div className="chart-card">
          <div className="holder">
            <h3>BankNifty Options OI</h3>
            <div className="dboi">
              <Bar options={options1} data={banknifty_options} />
            </div>
          </div>
        </div>
      </div>
      <div className="chartgrp">
        <div className="chart-card">
          <div className="holder">
            <h3>Nifty CE Most OI (k)</h3>
            <div className="d">
              <Bar options={nfcoptions} data={nifty_most_ce} />
            </div>
          </div>
        </div>
        <div className="chart-card">
          <div className="holder">
            <h3>BankNifty CE Most OI (k)</h3>
            <div className="dboi">
              <Bar options={bnfcoptions} data={banknifty_most_ce} />
            </div>
          </div>
        </div>
      </div>
      <div className="chartgrp">
        <div className="chart-card">
          <div className="holder">
            <h3>Nifty PE Most OI (k)</h3>
            <div className="dboi">
              <Bar options={nfpoptions} data={nifty_most_pe} />
            </div>
          </div>
        </div>
        <div className="chart-card">
          <div className="holder">
            <h3>BankNifty PE Most OI (k)</h3>
            <div className="d">
              <Bar options={bnfpoptions} data={banknifty_most_pe} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
