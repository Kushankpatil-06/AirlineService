const express = require('express');
const cityController = require('../../controllers/city-controller')
const FlightController = require('../../controllers/flight-controller')
const AirportController = require('../../controllers/airport-controller');
const FlightMiddleware = require('../../middlewares/flight-middleware')
const router = express.Router();

router.post('/city',cityController.create);
router.delete('/city/:id',cityController.destroy);
router.get('/city/:id',cityController.get);
router.patch('city/:id',cityController.update);
router.get('/city',cityController.getAll);



router.post('/flights',FlightController.create);
router.get('/flights',FlightMiddleware.validateCreateFlight, FlightController.getAll);



router.post('/airports',AirportController.create);
module.exports = router;