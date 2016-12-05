var express = require('express');
var router = express.Router();
var request = require('request');

//Restify, request, JWT

var ttl = "";
var msg = "";
var bears = [];

//Call API to get the title
request('http://localhost:8000/api', function(error, response, body){
  console.log(JSON.stringify(body));
    var data = JSON.parse(body);
    ttl = data.message;
  });

//Call the API to get the bears  
request('http://localhost:8000/api/bears', function(error, response, body){
    var data = JSON.parse(body);

    data.forEach(function(element){
        bears.push(element.name);
    });
  });   

/*//Call the users
request('http://localhost:8000/api/user')  */



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { bears: bears,
    title: ttl});
 //res.render('index', {bearlist: bears});
});

module.exports = router;
