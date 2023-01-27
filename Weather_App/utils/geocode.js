const request = require("postman-request");

const geocode = (address, callback) => {
  const url = ` https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic2F0eWFtc2luZ2hrIiwiYSI6ImNsNzdzdDc1MjAyemM0MXM5bjRmbDluNm4ifQ.eehkfJBUUeTMWYXSbgibog`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect the location service", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find the location.Try anather search", undefined);
    } else {
      callback(undefined, {
        longitute: body.features[0].center[0],
        latitute: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
