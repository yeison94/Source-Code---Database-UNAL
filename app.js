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
var port =  8080; 


// ROUTES 
// ===================================================
var routes = require("./routes/users.js")(app);


//connect with database users 
mongoose.connect('mongodb://localhost/users', function(err, res) {
	if(err) {
		console.log('Error connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

// START THE SERVER
// =============================================================================



var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});