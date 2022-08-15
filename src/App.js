
import {  useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import StrikeAnalysis from './components/StrikeAnalysis';
import Tracker from './components/Tracker';

function App() {
    useEffect(() => {
        document.title = "M1"
    }, [])
    

  const [dashboard, setDashboard] = useState(true)
  const [strikeAnalysis, setStrikeAnalysis] = useState(false)
  const [tracker, setTracker] = useState(false)
  return (
    <div className="App">
      <div className="sidebar">
        <div className="btn-side-grp">
            <div className="logo">
                asdf
            </div>
            <button onClick={() => {setDashboard(true);setStrikeAnalysis(false);setTracker(false)}}>
                Dashboard
            </button>
            <button>
                Future OI
            </button>
            <button>
                Option Chain
            </button>
            <button onClick={() => {setDashboard(false);setStrikeAnalysis(true);setTracker(false)}}>
                Strike Analysis
            </button>
            <button onClick={() => {setDashboard(false);setStrikeAnalysis(false);setTracker(true)}}>
                Tracker
            </button>
        </div>
        <div className='top-nav'>
            
        </div>
    </div>

    {dashboard && <Dashboard />}
    {tracker && <Tracker />} 
    {strikeAnalysis && <StrikeAnalysis />}
    </div>
  );
}

export default App;
