const request = require('request');
require('dotenv').config();

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${latitude},
    ${longitude}`;

  request({ url, json: true }, (error, response) => {
    const { error: responseError, current, location } = response.body;
    if (error) {
      callback( undefined, 'unable to connect to the weather service');
    } else if (responseError) {
      callback(undefined, 'unable to find location');
    } else {
      const { temperature, feelslike, weather_descriptions, weather_icons } = current;

      const forecastInfo = {
        text: `${weather_descriptions}. It is currently ${temperature} degrees out. It feel like ${feelslike} degrees out.`,
        weather_icons,
        localtime: location.localtime
      }

      callback(
         forecastInfo, undefined
      );
    }
  });
};

module.exports = forecast;
