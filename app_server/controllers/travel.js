const fs = require('fs');

const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips });
  }
const room  = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', rooms });
  }
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways'});
  }
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways'});
  }

module.exports = {
    travel,
    room,
    meals,
    news
}