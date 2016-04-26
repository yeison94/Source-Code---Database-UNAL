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

//it will listen for requests on port 3000 when the server starts
var portlisten =  3000; 

//Configure connection
var host = 'localhost';
var databaserver = 'users';
//port where listening mongo
var port = '4928';



// ROUTES 
// ===================================================
//The code with method is in this route
var routes = require("./routes/users.js")(app);


//connect with database users 
mongoose.connect('mongodb://'+host+'/'+databaserver, function(err, res) {
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