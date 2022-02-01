const async = require('hbs/lib/async');
const mongoose = require('mongoose');
const Model = mongoose.model('Trip');

// Get '/trips' to list all trips
const tripList = async(req, res) => {
    Model
    .find({}) // empty filter to get all trips
    .exec((err, trips) => {
        if(!trips){
            return res
            .status(404)
            .json({"message": "Trips not found"});
        }
        else if (err){
            return res
            .status(404)
            .json(err);
        }
        else{
            return res
            .status(200)
            .json(trips);
        }
    });
};

// GET :/trips/:tripCode - return a single trip based on passed code
const tripByCode = async(req, res) => {
    Model
    .find({'code': req.params.tripCode})
    .exec((err, trip) => {
        if(!trip){
            return res
            .status(404)
            .json({"message":"Trip not found"});
        }
        else if (err){
            return res
            .status(404)
            .json(err);
        }
        else{
            return res
            .status(200)
            .json(trip)
        }
    });
};

module.exports = {
    tripList,
    tripByCode
};

