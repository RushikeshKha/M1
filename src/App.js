import {  useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import StrikeAnalysis from './components/StrikeAnalysis';
import Tracker from './components/Tracker';
import { Routes, Route, Link } from "react-router-dom";
import Trending from './components/Trending';
function App() {
    useEffect(() => {
        document.title = "M1"
    }, [])
    

  return (
    
    <div className="App">
        
      <div className="sidebar">
        <div className="btn-side-grp">
            <div className="logo">
                asdf
            </div>
            <button>
            <Link to="/">Dashboard</Link>
            </button>
            <button>
                Future OI
            </button>
            <button>
                Option Chain
            </button>
            <button>
                <Link to="/sa">Strike Analysis</Link>
            </button>
            <button>
            <Link to="/tracker">Tracker</Link>
            </button>
            <button>
            <Link to="/trending">Trending</Link>
            </button>
        </div>
        <div className='top-nav'>
            
        </div>
    </div>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/sa" element={<StrikeAnalysis />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    {/* {dashboard && <Dashboard />}
    {tracker && <Tracker />} 
    {strikeAnalysis && <StrikeAnalysis />} */}
    </div>
  );
}

export default App;
