const request = require("postman-request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide address");
} else {
  geocode(address, (error, { latitute, longitute, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitute, longitute, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log("Data", forecastData);
    });
  });
}
