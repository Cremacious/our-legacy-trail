import strava from 'strava-v3';

const access_token = 'f08b4b5383b6f2eda750b1e0d1803eec8fb46321';

export const getAthlete = async () => {
    const userStrava = new strava.client(access_token);
    const payload = await userStrava.athlete.get({});
    console.log(payload);
  };
  