import { useState, useEffect } from 'react';

import Activity from '../activity/activity.component';



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
    </div>
  );
}

export default Activities;
