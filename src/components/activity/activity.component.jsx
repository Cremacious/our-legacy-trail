function Activity({ activity }) {
  const { name } = activity;
  return (
    <div>
      <h3>Activity</h3>
      <p>Activity Name: {name}</p>
    </div>
  );
}

export default Activity;
