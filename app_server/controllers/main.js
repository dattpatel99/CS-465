const fs = require('fs');
const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways' });
  }
const room  = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', rooms });
  }
  
module.exports = {
    index,
    room
}