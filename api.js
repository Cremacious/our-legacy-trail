var strava = require('strava-v3');

// Configure OAuth2 access token for authorization
strava.config({
  access_token: 'd3b3f849377908120d61a3b183f21a6fd3ce969f'
});

var opts = {
  before: 1625097600, // Example epoch timestamp for filtering activities before a certain time
  after: 1622505600,  // Example epoch timestamp for filtering activities after a certain time
  page: 1,            // Page number. Defaults to 1.
  per_page: 30        // Number of items per page. Defaults to 30.
};

strava.athlete.listActivities(opts, function(err, payload) {
  if (err) {
    console.error(err);
  } else {
    console.log(payload);
  }
});