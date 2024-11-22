import './App.css';
import Home from './routes/home/home.component';
import { Buffer } from 'buffer';
import { getActivities, handleRedirect, requestAccess } from './utils/strava.utils';
import { useEffect } from 'react';

global.Buffer = Buffer;

function App() {
  useEffect(() => {
    handleRedirect();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Home />
        {/* <button onClick={getAthlete}>Get Athlete Data</button> */}
        <br />
        <button onClick={getActivities}>Get Activities</button>
        <br />
        <button onClick={requestAccess}>Request Access</button>
        {/* <button onClick={testButton}>Test Button</button> */}
      </header>
    </div>
  );
}

export default App;
