import { useState, useEffect } from 'react';

import Activity from '../activity/activity.component';
// import { fetchActivityData } from "../../utils/strava.utils";
import { tempData } from '../../utils/temp-data';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // setActivities(fetchActivityData)
    setActivities(tempData);
  }, []);

  const fetchActivityData = async () => {
    const data = await fetchActivityData();
    console.log(data);
  };

  return (
    <div>
      <h2>Activities Here</h2>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
      <button onClick={fetchActivityData}>Fetch Data</button>
    </div>
  );
}

export default Activities;
