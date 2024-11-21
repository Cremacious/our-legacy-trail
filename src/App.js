import './App.css';
import Home from './routes/home/home.component';
import { Buffer } from 'buffer';
import { getActivities } from './utils/strava.utils';

global.Buffer = Buffer;

function App() {
  const getStravaActivities = async () => {
    getActivities();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <button onClick={getStravaActivities}>Get Strava Activities</button>
      </header>
    </div>
  );
}

export default App;
