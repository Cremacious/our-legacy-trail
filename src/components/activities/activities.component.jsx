import { useState, useEffect } from 'react';

import Activity from '../activity/activity.component';
import {
  fetchActivityData,
  requestAccess,
  refreshToken,
} from '../../utils/strava.utils';
// import { tempData } from '../../utils/temp-data';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // setActivities(fetchActivityData)
    // setActivities(tempData);
  }, []);

  const fetchActivity = async () => {
    const data = await fetchActivityData();
    console.log('Data:', data);
    if (data) {
      setActivities(data);
    }

    // setActivities(data);
  };

  return (
    <div>
      <h2>See Activities Here</h2>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
      <button onClick={fetchActivity}>Fetch Data</button>
      <button onClick={refreshToken}>Refresh Token</button>
      <button onClick={requestAccess}>Request Access</button>
    </div>
  );
}

export default Activities;
