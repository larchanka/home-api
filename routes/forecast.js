const Forecast = require('forecast');
const config = require('../inc/config.json');

// Vars
const apiKey = process.env.FAPI || '';
const weatherCoords = config.weatherCoords;

const forecast = new Forecast({
  service: 'forecast.io',
  key: apiKey,
  units: 'celcius',
  cache: true,
  ttl: {
    minutes: 27,
    seconds: 45
    }
});

module.exports = (request, response) => {
  
  return forecast.get(weatherCoords, (err, weather) => {
    if(err) {
      return response.status(500).send('Something broke!');
    }
    
    return response.status(200).send(weather);
  });
};
