const about = (req, res) => {
    res.render('about', { title: 'Travlr Getaways' });
  }
const contact = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways' });
  }
  
module.exports = {
    about,
    contact
}