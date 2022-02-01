const fs = require('fs');
const rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const { response } = require('express');
const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
}

// Renders the Travel list data based on the body that is returned
const renderTravelList = (req, res, body) => {
  let message = null;
  let pageTitle =  ' Travel';

  if(!(body instanceof Array)){
    message = "API lookup error";
    body = [];
  }
  else{
    if (!body){
      message = "No Trips exist in DB";
    }
  }

  res.render('travel', {
    title: 'Travlr Getaways',
    trips: body,
    message
  })
}

// Handles the creation of travel list request from DB
const travelList = (req, res) => {
  const path = '/api/trips';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  }

  console.info(">> travelControler.traveList calling " + requestOptions.url);

  request(
    requestOptions,
    (err, {statusCode}, body ) => {
      if (err){
        console.error(err);
      }
      renderTravelList(req, res, body);
    }
  )

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
    travelList,
    room,
    meals,
    news
}