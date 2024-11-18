import './activity.styles.jsx';

import {
  ActivityButton,
  ActivityRow,
  ActivityCol,
} from './activity.styles.jsx';

function Activity({ activity }) {
  const {
    name,
    id,
    max_speed,
    photo_count,
    upload_id,
    distance,
    elapsed_time,
  } = activity;
  return (
    <div>
      <h3>Activity</h3>
      <p>Activity Name: {name}</p>
      <p>Activity ID: {id}</p>
      <p>Max Speed: {max_speed}</p>
      <p>Photo Count: {photo_count}</p>
      <p>Upload ID: {upload_id}</p>
      <p>Distance: {distance}</p>
      <p>Elapsed Time: {elapsed_time}</p>
      {/* <p>Map: {map}</p> */}
    </div>
  );
}

export default Activity;
