import { useState, useEffect } from 'react';

import Activity from '../activity/activity.component';

import { getActivities } from '../../utils/strava.utils';

function Activities() {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  }


  return (
    <div>
      <h2>Activities Here</h2>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
      <button onClick={fetchActivities}>Fetch Activities</button>
    </div>
  );
}

export default Activities;
