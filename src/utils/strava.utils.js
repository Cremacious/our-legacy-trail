// Authorization URL: https://www.strava.com/api/v3/oauth/authorize

// Token URL: https://www.strava.com/api/v3/oauth/token

const CLIENT_ID = '139244';
const CLIENT_SECRET = 'd40128b97225afafe8fe1ed0b8243a04cb6f4562';
const REFRESH_TOKEN = '75ee692e6a9200e188c3896f1a6a438291edae30';
let ACCESS_TOKEN = '';

// export async function refreshToken() {
//   try {
//     const response = await fetch('https://www.strava.com/api/v3/oauth/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({
//         client_id: CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         grant_type: 'refresh_token',
//         refresh_token: REFRESH_TOKEN,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('Token:', data.access_token);
//     ACCESS_TOKEN = data.access_token;
//     return data.access_token;
//   } catch (error) {
//     console.error('Error refreshing token:', error);
//   }
// }

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
