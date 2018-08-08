var express = require("express");
var app = express();
var path  = require('path');

var http  = require('http')
var bodyParser = require('body-parser');
var UserRoute = require('../app/routes/user.route');

 
 app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var api = express.Router();
app.use('/api',api);

app.use(express.static(path.join(__dirname, 'public')));


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.get('/', (req,res) => {
    res.send('Use /api endpoint for accessing APIs');
});


var ApiConfig = {
  app: app
}

UserRoute.init(api);

module.exports = ApiConfig;
