//We are passing the app variable from app.js and then exporting to be used by whatever calls it in the project.
module.exports = function(app) {

	var User = require('../models/user.js');

	//GET - Verify email exist
	app.get("/users", function(req, res) {

		//This method returns one document that satisfies the specified query criteria 
		User.findOne({email : req.query.email}, function(err, user) {

			if(!err) {
			

		        if(user != null){
		          console.log("FOUND");

		          //response JSON in case of found
                  res.json({success: false, email : user.email, error : null});

		        }else{
		          console.log("NOT FOUND");

		          //response JSON in case of not found
		          res.json({success: true, email : req.query.email, error : null});
		        }      
		    }else {

		        console.log('ERROR: ' + err.name);
		        res.json({success: null, email : req.query.email, error : err.name}); 
		    }
		})
	});


	//GET - Validate user using email and password
    app.get('/user', function(req, res) {

    //This method returns one document that satisfies the specified query criteria 
    User.findOne({email : req.query.email, password : req.query.password}, function(err, user) {

        if(!err) {

	        if(user != null){

	          console.log("USER EXISTS");
	          //response JSON in case user exists
	          res.json({email: user.email, externalID : user.externalID, success : true ,error : null});

	        }else{

	          //response JSON in case user not xists
	          console.log("USER NOT EXISTS");
	          res.json({email: req.query.email, externalID : null, success : false ,error : null});
	        }
        
      } else {
        console.log('ERROR: ' + err.name);
        res.json({email: req.query.email, externalID : null, success : false ,error : err.name});
      }
    });
  });


    //POST - Insert a new User in the DB
    app.post('/users',function(req, res) {

    	console.log(req.body.email);

    	//create a new instance of the User model
	  	var user = new User({
		  	name       :    req.body.name,
		    email      :    req.body.email,
		    password   :    req.body.password,
		    gender     :    req.body.gender,
		    picture    :    req.body.picture,
		    externalID :    req.body.externalID  
	  	});
	     
	    //This method save object User in database users  
	  	user.save(function(err) {
	 
	        if(!err) {
		        console.log('USER REGISTRATED');
		        res.json({email : req.body.email, success : true, error : null });    
	        } else {
		        console.log('ERROR: ' + err);
		        res.json({email : req.body.email, success : false, error : err.name});    
	        }
	  	});
    });

}
 
