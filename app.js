// BASE SETUP
// =============================================================================

// call the packages 
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require('mongoose'); 

//Configure the body parser to accept JSON and url encoded values 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set port
var portlisten =  3000; 

//Configure connection
var username = 'yeison94';
var passwordconnectingserver = '3137203715yeison94'; 
var host = 'localhost';
var port = '4929';
var databaserver = 'users';



// ROUTES 
// ===================================================
var routes = require("./routes/users.js")(app);


//connect with database users 
mongoose.connect('mongodb://'+username+':'+passwordconnectingserver+'@'+host+':'+port+'/'+databaserver, function(err, res) {
	if(err) {
		console.log('Error connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

// START THE SERVER
// =============================================================================



var server = app.listen(portlisten, function () {
    console.log("Listening on port %s...", server.address().port);
});