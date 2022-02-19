// @ts-check
const request = require('request');
require('dotenv').config();

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/ ${encodeURIComponent(
    address
  )} .json?access_token=${process.env.ACCESS_TOKEN}`;

  request({ url: url, json: true }, (error, { body }) => {
    const data = body.features;
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (body.features?.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: data[0].center[1],
        longitude: data[0].center[0],
        location: data[0].place_name
      });
    }
  });
};

module.exports = geocode;
