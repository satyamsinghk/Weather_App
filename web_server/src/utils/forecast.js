const request = require("postman-request");

const forecast = (latitute, longitute, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=5506ea1b235c540e0f80175ccec57b6f&query=" +
    latitute +
    "," +
    longitute;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect the location service", undefined);
    } else if (body.error === 0) {
      callback("Unable to find the location.Try anather search", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions +
          " It is currently " +
          body.current.temperature +
          " degress out.There is a " +
          body.current.precip +
          " % chance of Rain."
      );
    }
  });
};

module.exports = forecast;
