var Forecast = require('forecast');
var config = require('../inc/config.json');

// Vars
var apiKey = process.env.FAPI || '';
var weatherCoords = config.weatherCoords;

var forecast = new Forecast({
  service: 'forecast.io',
  key: apiKey,
  units: 'celcius',
  cache: true,
  ttl: {
    minutes: 27,
    seconds: 45
    }
});

module.exports = function(request, response) {
  
  return forecast.get(weatherCoords, function(err, weather) {
    if(err) {
      return response.status(500).send('Something broke!');
    }
    
    return response.status(200).send(weather);
  });
};
