// index.js
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (let i = 0; i < passTimes.length; i++) {
    const dateData = new Date(0);
    dateData.setUTCSeconds(passTimes[i].risetime);
    console.log(`Next pass at ${dateData} for ${passTimes[i].duration} seconds!`);
  }
});


// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });




// fetchCoordsByIP("50.64.128.101", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//
//   console.log('It worked! Returned IP:' , ip);
// });
