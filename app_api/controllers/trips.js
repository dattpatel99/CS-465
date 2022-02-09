const async = require('hbs/lib/async');
const mongoose = require('mongoose');
const Model = mongoose.model('Trip');

// Get '/trips' to list all trips
const tripList = async (req, res) => {
    Model
        .find({}) // empty filter to get all trips
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({ "message": "Trips not found" });
            }
            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

// Read :/trips/:tripCode - return a single trip based on passed code
const tripByCode = async (req, res) => {
    Model
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "Trip not found" });
            }
            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json(trip)
            }
        });
};

// Create method
const tripsAddTrip = async (req, res) => {
    Model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description,
        },
            (err, trip) => {
                if (err) {
                    return res
                        .status(400)
                        .json(err);
                }
                else {
                    return res
                        .status(201)
                        .json(trip);
                }
            }
        )
};

// Delete method
const tripsDeleteTrip = async (req, res) => {
    console.log(req.body);
    Model
        .findOneAndDelete({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message": "Trip not deleted" });
            }
            else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json({"message": "Deleted"})
            }
        });
}

// Update method
const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    Model
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
}

module.exports = {
    tripList,
    tripByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip,
};

