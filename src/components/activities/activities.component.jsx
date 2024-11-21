import { useState, useEffect } from 'react';

import Activity from '../activity/activity.component';

function Activities() {
  const [activities, setActivities] = useState([]);



  return (
    <div>
      <h2>Activities Here</h2>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

export default Activities;
