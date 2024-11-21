import { useState, useEffect } from 'react';

import Activity from '../activity/activity.component';
<<<<<<< HEAD
<<<<<<< HEAD


=======
import { fetchActivityData, refreshToken } from '../../utils/strava.utils';
=======
import { fetchActivityData, requestAccess } from '../../utils/strava.utils';
>>>>>>> parent of 91e667d (Possible fix)
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
      <h2>Activities Here</h2>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
      <button onClick={fetchActivity}>Fetch Data</button>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <button onClick={refreshToken}>Refresh Token</button>
>>>>>>> parent of a31c9f7 (Added a function for redirecting for auth.)
=======
      {/* <button onClick={refreshToken}>Refresh Token</button> */}
      <button onClick={requestAccess}>Request Access</button>
>>>>>>> parent of 91e667d (Possible fix)
    </div>
  );
}

export default Activities;
