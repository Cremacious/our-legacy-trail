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

  return (
    <div>
      <h2>Activities Here</h2>
      {activities.map((activity) => (
        <Activity activity={activity} />
      ))}
    </div>
  );
}

export default Activities;

