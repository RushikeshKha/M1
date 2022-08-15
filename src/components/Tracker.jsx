import React, { useState } from 'react'
import './Tracker.css'
import './Dashboard.css'
import { useEffect } from 'react'

function Tracker() {
    const [response, setResponse] = useState({ time: [12], chngOi: ['23'], price: [12] })
    const [strikes, setStrikes] = useState([])
    const [ticker, setTicker] = useState("Select")
    const [times, setTimes] = useState(50)
    const [action, setAction] = useState("CE")
    const [chooseStrike, setChooseStrike] = useState(17500)
    let changeOi = []
    let price = []
    let time = []

    

    useEffect(() => {
        if(ticker === "Select") return;
        fetch(`http://192.168.0.103:4000/loadstrikes/${ticker}`).then(res => res.json().then((data) => { setStrikes(data) }))
    }, [ticker])

    return (
        <><div className="container">

            <div className="heading">
                Tracker
            </div>
            <div className="divide"></div>

            <div className="sa-options">
                <div className="topper">
                    <div className="indices">
                        <div>
                            <label>INDICES</label><br />
                            <select value={ticker} onChange={(e) => { setTicker(e.target.value); }}>
                            <option value="Select">Select</option>
                                <option value="BankNifty">BankNifty</option>
                                <option value="Nifty">Nifty</option>
                            </select>
                        </div>

                        <button className="rnd-btn" onClick={() => setTimes(200)}>
                            ALL
                        </button>
                        <button className="rnd-btn" onClick={() => setTimes(40)}>
                            60MIN
                        </button>
                        <button className="rnd-btn" onClick={() => setTimes(20)}>
                            30MIN
                        </button>
                        <button className="rnd-btn" onClick={() => setTimes(10)}>
                            15MIN
                        </button>
                        <button className="rnd-btn" onClick={() => setAction("CE")}>
                            CE
                        </button>
                        <button className="rnd-btn" onClick={() => setAction("PE")}>
                            PE
                        </button>
                        <button className='rnd-btn' onClick={() => {
                            fetch('http://192.168.0.103:4000/tracker/', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    "ticker": ticker,
                                    "time": times,
                                    "strike": chooseStrike,
                                    "action": action
                                })
                            })
                                .then(res => res.json().then((data) => {
                                    for (var i = 1; i <= data.length - 1; i++) {
                                        time.push(data[i]['time'])
                                        changeOi.push(data[i - 1]['oi'] - data[i]['oi'])
                                        price.push(data[i]['price'])
                                        
                                    }
                                    setResponse({ time: time, chngOi: changeOi, price: price })
                                }))
                        }}>Refresh</button>
                    </div>
                </div>
                <div className="topper-tracker">

                    <div className='btn-holder-one'>
                        <h5 className='btn-holder-label'>Strikes</h5>
                        <div className="second-topper">
                            {strikes.map((data,i) => <button key={i} className="rnd-btn" onClick={(e) => { setChooseStrike(data); e.currentTarget.classList.toggle('rnd-btn-active') }}>{data}</button>)}
                        </div>
                    </div>
                </div>
                <div className="divide"></div>
                <div className="ty">
                    <h5 className='btn-holder-label'>Action</h5>
                    <button className="rnd-btn" id='b1'>
                        Short Build Up
                    </button>
                    <button className="rnd-btn" id='b2'>
                        Long Build Up
                    </button>
                    <button className="rnd-btn" id='b3'>
                        Short Covering
                    </button>
                    <button className="rnd-btn" id='b4'>
                        Long Unwinding
                    </button>
                </div>
                <label>Strike:{chooseStrike} Interval:{times} Option:{action}</label>
                <div className="tablee">
                    <table>
                        <tbody>
                        <tr>
                            <th>Time</th>
                            <th>No. of Contracts</th>
                            <th>Action</th>
                        </tr>
                        {
                            response['time'].map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data}</td>
                                        <td>{response['chngOi'][i + 1]}</td>
                                        <td>{response['price'][i + 1]}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div></>
    )
}

export default Tracker