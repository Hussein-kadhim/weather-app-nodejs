const fetch = require('node-fetch')
require('dotenv').config();

const forecast = async (latitude, longitude) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${latitude},
    ${longitude}`;

    try {
      const res = await fetch(url)
      const body = await res.json()
    if(body.error){
      return {error: body.error.info}
    }
      const { temperature, feelslike, weather_descriptions, weather_icons } = body?.current;

      const forecastInfo = {
        text: `${weather_descriptions.join(' ')}. It is currently ${temperature} degrees out. It feel like ${feelslike} degrees out.`,
        weather_icons,
        localtime: body.location.localtime
      }
       return forecastInfo
    } catch (error) {
      console.error(error);
      return({error: 'unable to connect to the weather service'});
    }
  }

module.exports = forecast;
