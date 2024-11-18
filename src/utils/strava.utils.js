const activity_token = 'a79bf8c3cb89790ef1554f23520a58d92fe68fcb';

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
    return data;
  } catch (error) {
    console.error('Error fetching athlete stats:', error);
  }
}
