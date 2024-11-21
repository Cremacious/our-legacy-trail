import { useState, useEffect } from 'react';

import Activity from '../activity/activity.component';
<<<<<<< HEAD


=======
import { fetchActivityData, refreshToken } from '../../utils/strava.utils';
// import { tempData } from '../../utils/temp-data';
>>>>>>> parent of a31c9f7 (Added a function for redirecting for auth.)

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {

  }, []);

  const fetchActivity = async () => {
    // const data = await fetchActivityData();
    // console.log('Data:', data);
    // if (data) {
    //   setActivities(data);
  };

  return (
    <div>
      <h2>See Activities Here</h2>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
      <button onClick={fetchActivity}>Fetch Data</button>
<<<<<<< HEAD
=======
      <button onClick={refreshToken}>Refresh Token</button>
>>>>>>> parent of a31c9f7 (Added a function for redirecting for auth.)
    </div>
  );
}

export default Activities;
