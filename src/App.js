import './App.css';
import Home from './routes/home/home.component';
import { Buffer } from 'buffer';
import { getAthlete, getActivities } from './utils/strava.utils';

global.Buffer = Buffer;

function App() {
  // const getStravaActivities = async () => {
  //   getActivities();
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <button onClick={getAthlete}>Get Athlete Data</button>
        <br />
        <button onClick={getActivities}>Get Activities</button>
      </header>
    </div>
  );
}

export default App;
