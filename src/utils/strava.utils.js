import strava from 'strava-v3';

const access_token = 'f08b4b5383b6f2eda750b1e0d1803eec8fb46321';
let ACCESS_TOKEN = '';

const CLIENT_ID = '139244';
const CLIENT_SECRET = 'd40128b97225afafe8fe1ed0b8243a04cb6f4562';
const REDIRECT_URI = 'http://localhost:3000';
const RESPONSE_TYPE = 'code';
const APPROVAL_PROMPT = 'force';
const SCOPE = 'activity:read_all,activity:write';

// const athleteStrava = new strava.client(access_token);
// const activitiesStrava = new strava.client(tempAuth);

// export const getAthlete = async () => {
//   const payload = await athleteStrava.athlete.get({});
//   console.log(payload);
// };

export const getActivities = async () => {
  try {
    const response = await fetch(
      'https://www.strava.com/api/v3/athlete/activities',
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log('Activities:', data);
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching activities:', error);
    return [];
  }
};

export const requestAccess = () => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: RESPONSE_TYPE,
    approval_prompt: APPROVAL_PROMPT,
    scope: SCOPE,
  });

  const url = `https://www.strava.com/oauth/authorize?${params.toString()}`;
  window.location.href = url;
};

export const handleRedirect = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  if (code) {
    try {
      const response = await fetch('https://www.strava.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code: code,
          grant_type: 'authorization_code',
        }),
      });

      const data = await response.json();
      console.log('Access Token:', data.access_token);
      ACCESS_TOKEN = data.access_token;
    } catch (error) {
      console.error(
        'Error exchanging authorization code for access token:',
        error
      );
    }
  }
};
