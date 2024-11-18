import './activity.styles.jsx';

import { ActivityButton, ActivityRow, ActivityCol } from './activity.styles.jsx';


function Activity({ activity }) {
  const { name } = activity;
  return (
    <div>
      <h3>Activity</h3>
      <p>Activity Name: {name}</p>
      <ActivityButton>Click Me</ActivityButton>
      <ActivityRow>
        <ActivityCol>Col 1</ActivityCol>
        <ActivityCol>Col 2</ActivityCol>
        <ActivityCol>Col 3</ActivityCol>
      </ActivityRow>
    </div>
  );
}

export default Activity;
