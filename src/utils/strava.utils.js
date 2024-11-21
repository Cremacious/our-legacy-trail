import strava from 'strava-v3';

const CLIENT_ID = '139244';
const CLIENT_SECRET = 'd40128b97225afafe8fe1ed0b8243a04cb6f4562';
const ACCESS_TOKEN = 'd3b3f849377908120d61a3b183f21a6fd3ce969f';

strava.config({
  access_token: ACCESS_TOKEN,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  redirect_uri: 'http://localhost:3000',
});
// const payload = await strava.athlete.get({});
// console.log(payload);

export const getActivities = async () => {
  // const payload = await strava.athlete.listActivities({});
  // console.log(payload);
  // return payload;
}