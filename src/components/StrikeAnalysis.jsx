import React, { useEffect } from 'react'
import './StrikeAnalysis.css'
import './Dashboard.css'
import { useState } from 'react'
import OIChart from './OIChart'
import BarChart from './BarChart'


function StrikeAnalysis() {

    let ab_time = []
    let ab_oi = []
    const [strikes, setStrikes] = useState([])
    const [ticker, setTicker] = useState("Select")
    const [time, setTime] = useState()
    const [action, setAction] = useState("")
    const [chooseStrike, setChooseStrike] = useState([])
    const [chartd, setChartd] = useState({
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
    const [absolute, setAbsolute] = useState({
        labels: ["15000", "15800", "16500", "16200", "15700", "16900"],
        datasets: [
            {
                label: "No of Contracts",
                data: [20, 20, 20, 20, 20, 20],
                backgroundColor: ["rgba(108, 181, 106, 1)"],
                borderColor: ["rgba(6, 184, 56, 1)"],
                borderWidth: 0,
                borderRadius: 50,
                barThickness: 10
            }
        ]
    })
    useEffect(() => {
        if(ticker === "Select") return;
        fetch(`http://192.168.0.103:4000/loadstrikes/${ticker}`).then(res => res.json().then((data) => { setStrikes(data) }))
    }, [ticker])


    return (
        <div>

            <div className="container">

                <div className="sa-heading">
                    Strike Analysis
                </div>
                <div className="divide"></div>
                <div className="sa-options">
                    <div className="topper">
                        <div className="indices">
                            <label>INDICES</label><br />
                            <select value={ticker} onChange={(e) => { setTicker(e.target.value); }}>
                                <option value="Select">Select</option>
                                <option value="BankNifty">BankNifty</option>
                                <option value="Nifty">Nifty</option>
                            </select>
                        </div>
                        <div className="timeframe">
                            
                            <button className="rnd-btn" onClick={() => setTime(200)}>
                                ALL
                            </button>
                            <button className="rnd-btn" onClick={() => setTime(40)}>
                                60MIN
                            </button>
                            <button className="rnd-btn" onClick={() => setTime(20)}>
                                30MIN
                            </button>
                            <button className="rnd-btn" onClick={() => setTime(10)}>
                                15MIN
                            </button>
                            <button className="rnd-btn" onClick={() => setAction("CE")}>
                                CE
                            </button>
                            <button className="rnd-btn" onClick={() => setAction("PE")}>
                                PE
                            </button>
                            <button className="rnd-btn" onClick={() => {
                                fetch(`http://192.168.0.103:4000/strikeanalysis/${ticker}`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        "strike": [chooseStrike],
                                        "timeCount": time,
                                        "action": action
                                    })
                                }).then(res => res.json().then((data) => {

                                    for (var i = 0; i <= (data[chooseStrike]['oi'].length - 2); i++) {
                                        ab_time.push(data[chooseStrike]['time'][i])
                                        ab_oi.push(data[chooseStrike]['oi'][i] - data[chooseStrike]['oi'][i + 1])
                                    }
                                    setChartd({
                                        labels: data[chooseStrike]['time'].reverse(),
                                        datasets: [
                                            {
                                                pointRadius: 0,
                                                label: "# of Contract",
                                                data: data[chooseStrike]['oi'].reverse(),
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
                                    setAbsolute({
                                        labels: ab_time.reverse(),
                                        datasets: [
                                            {
                                                label: "No of Contracts",
                                                data: ab_oi.reverse(),
                                                backgroundColor: ["rgba(108, 181, 106, 1)"],
                                                borderColor: ["rgba(6, 184, 56, 1)"],
                                                borderWidth: 0,
                                                borderRadius: 50,
                                                barThickness: 10
                                            }
                                        ]
                                    })
                                }))
                            }}>
                                Refresh
                            </button>
                        </div>
                    </div>
                    <div className="second-topper">
                        {strikes.map((data,i) => <button key={i} className="rnd-btn" onClick={(e) => { setChooseStrike(data); e.currentTarget.classList.toggle('rnd-btn-active') }}>{data}</button>)}

                    </div>
                </div>
                <label>Strike:{chooseStrike} Interval:{time} Option:{action}</label>
                <div className="chartOI">
                    <OIChart chartdata={chartd} />

                </div>
                <label>Quantity</label>
                <div className="absolute">

                    <BarChart chartdata={absolute} />

                </div>
            </div>
        </div>
    )
}

export default StrikeAnalysis