const { FlightService } = require('../services/index');// const { SuccessCodes } = require('../utils/error-codes');
const { SuccessCodes } = require('../utils/errorcode');
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airpalneId: req.body.airplaneId,
            departureAitportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        };

        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        console.log(req.query);
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
        });
    }
}





const get = async (req, res) => {
    // implementation
};

const update = async (req, res) => {
    // implementation
};

module.exports = {
    create,
    getAll,
    get,
    update
};