const fetch = require('node-fetch');
require('dotenv').config();

const geocode = async (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/ ${encodeURIComponent(
    address
  )} .json?access_token=${process.env.ACCESS_TOKEN}`;


  try {
    const  res = await fetch(url)
    const body = await res.json()
    if(body.features && body.features.length === 0){
      return {error: 'Unable to find location. Try another search'}
    }else{
      const data = {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      }
      return data
    }

  } catch (error) {
    return {error: 'Unable to connect to location services!'}
  }
};

module.exports = geocode;