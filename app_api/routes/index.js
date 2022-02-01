const express = require('express');
const router = express.Router();

const tripController = require("../controllers/trips");

/* GET home page. */
router
.route('/trips')
.get(tripController.tripList);

router
.route('/trips/:tripCode')
.get(tripController.tripByCode)

module.exports = router;