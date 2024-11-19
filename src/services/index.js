const FlightService = require('./flight-service');

console.log("In services/index.js, FlightService is: ", typeof FlightService); // Should print "function"

module.exports = {
    CityService : require('./city-service'),
    FlightService
};