// Authorization URL: https://www.strava.com/api/v3/oauth/authorize

// Token URL: https://www.strava.com/api/v3/oauth/token

// https://www.strava.com/api/v3/oauth/authorize?response_type=code&client_id=139244&redirect_uri=https%3A%2F%2Fdevelopers.strava.com%2Foauth2-redirect%2F&scope=activity%3Aread_all&state=TW9uIE5vdiAxOCAyMDI0IDE5OjI1OjQyIEdNVC0wNTAwIChFYXN0ZXJuIFN0YW5kYXJkIFRpbWUp

const CODE = '9f38d88c573721f3cbb14c62bc98bfe47b7f206f';
const CLIENT_ID = '139244';
const CLIENT_SECRET = 'd40128b97225afafe8fe1ed0b8243a04cb6f4562';
const REFRESH_TOKEN = '75ee692e6a9200e188c3896f1a6a438291edae30';
const ACCESS_TOKEN = 'd3b3f849377908120d61a3b183f21a6fd3ce969f';
const ACTIVITY_BEARER = 'a7bc80b741fccc47a64f5f3f63da7c5e79295b16';

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
    console.log('Token:', data);
    return data.access_token;
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
}

export async function requestAccess() {
  try {
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: 'http://localhost:3000',
      response_type: 'code',
      scope: 'read',
    });

    window.location.href = `https://www.strava.com/oauth/authorize?${params.toString()}`;
  } catch (error) {
    console.error('Error requesting access:', error);
  }
}

export async function fetchActivityData() {
  try {
    const response = await fetch(
      'https://www.strava.com/api/v3/athlete/activities?per_page=30',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer a7bc80b741fccc47a64f5f3f63da7c5e79295b16',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('New Athlete Activities:', data);
    return data;
  } catch (error) {
    console.error('Error fetching activity data:', error);
  }
}

// export async function fetchActivityData() {
//   try {
//     const response = await fetch(
//       'https://www.strava.com/api/v3/athlete/activities?per_page=30',
//       {
//         headers: {
//           Authorization: `Bearer ${ACTIVITY_BEARER}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error!!!! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('Athlete Activities:', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching athlete stats:', error);
//   }
// }
