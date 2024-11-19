const FlightRepository = require('./flight-repository');
const AirplaneRepository = require('./airplane-repository');

console.log("In repository/index.js, FlightRepository is: ", typeof FlightRepository); // Should print "function"

module.exports = {
    CityRepository:require('./city-repository'),
    FlightRepository,
    AirplaneRepository
};