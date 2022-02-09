const express = require('express');
const router = express.Router();

const tripController = require("../controllers/trips");

/* GET home page. */
router
.route('/trips')
.get(tripController.tripList)
.post(tripController.tripsAddTrip);

router
.route('/trips/:tripCode')
.get(tripController.tripByCode)
.put(tripController.tripsUpdateTrip);


module.exports = router;