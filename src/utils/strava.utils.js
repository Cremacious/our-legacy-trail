import strava from 'strava-v3';

const CLIENT_ID = '139244';
const CLIENT_SECRET = 'd40128b97225afafe8fe1ed0b8243a04cb6f4562';
const ACCESS_TOKEN = 'd3b3f849377908120d61a3b183f21a6fd3ce969f';

<<<<<<< HEAD
strava.config({
  access_token: ACCESS_TOKEN,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  redirect_uri: 'http://localhost:3000',
});

export const fetchData = async () => {
  // const payload = await strava.athlete.get({});
  // console.log(payload);
  console.log('Fetching data...');
};
=======
export async function refreshToken() {
  try {
    const response = await fetch('https://www.strava.com/api/v3/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Token:', data.access_token);
    ACCESS_TOKEN = data.access_token;
    return data.access_token;
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
}

export async function fetchActivityData() {
  try {
    if (!ACCESS_TOKEN) {
      await refreshToken();
    }
    const response = await fetch(
      'https://www.strava.com/api/v3/athlete/activities?per_page=30',
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error!!!! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Athlete Activities:', data);
    return data;
  } catch (error) {
    console.error('Error fetching athlete stats:', error);
  }
}
>>>>>>> parent of a31c9f7 (Added a function for redirecting for auth.)
