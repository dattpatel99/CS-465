const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
})

const tripController = require("../controllers/trips");
const authController = require("../controllers/authentication");
/* GET home page. */

router
.route('/login')
.post(authController.login);

router
.route('/register')
.post(authController.register);

router
.route('/trips')
.get(tripController.tripList)
.post(auth, tripController.tripsAddTrip);

router
.route('/trips/:tripCode')
.get(tripController.tripByCode)
.put(auth, tripController.tripsUpdateTrip)
.delete(tripController.tripsDeleteTrip);

module.exports = router;