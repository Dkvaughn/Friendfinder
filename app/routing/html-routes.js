//Include the path package to get the correct file path
var path = require('path');

module.exports = function(app) {

//routing pathsfor html

// // Basic route that sends the user to the home page
  app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/home.html'));
  });
  //route to display the survey page - survery
  app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  // If no matching route is found defaults to home
  app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};