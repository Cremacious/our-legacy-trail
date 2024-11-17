const activity_token = '6ea3212e45bdf0854649f63fec9ef52182a5482b'

export async function fetchActivityData() {
  try {
    const response = await fetch(
      'https://www.strava.com/api/v3/athlete/activities?per_page=30',
      {
        headers: {
          Authorization: `Bearer ${activity_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Athlete Activities:', data);
  } catch (error) {
    console.error('Error fetching athlete stats:', error);
  }
}
