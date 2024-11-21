import strava from 'strava-v3';

const access_token = 'f08b4b5383b6f2eda750b1e0d1803eec8fb46321';
const tempAuth = '118a204fb6b1b6d5d2d288adc56ac98c6d716290';
const athleteStrava = new strava.client(access_token);
const activitiesStrava = new strava.client(tempAuth);

export const getAthlete = async () => {
  const payload = await athleteStrava.athlete.get({});
  console.log(payload);
};

export const getActivities = async () => {
  const payload = await activitiesStrava.athlete.listActivities({});
  console.log(payload);
};
