// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

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
