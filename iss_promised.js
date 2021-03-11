// iss_promised.js
const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const coordData = JSON.parse(body);
  return request(`https://freegeoip.app/json/${coordData.ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const flyData = JSON.parse(body);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${flyData.latitude}&lon=${flyData.longitude}`);
};

const nextISSTimesForMyLocation = function() {
  fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const data = JSON.parse(body);
      const passTimes = data.response;
      for (let i = 0; i < passTimes.length; i++) {
        const dateData = new Date(0);
        dateData.setUTCSeconds(passTimes[i].risetime);
        console.log(`Next pass at ${dateData} for ${passTimes[i].duration} seconds!`);
      }
    })
    .catch((error) => {
      console.log("It didn't work: ", error.message);
    });
};


module.exports = {
  nextISSTimesForMyLocation
};
