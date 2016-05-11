//We are passing the app variable from app.js and then exporting to be used by whatever calls it in the project.
module.exports = function(app) {

	var User = require('../models/user.js');

	//Service register POST ContentType: "application/json"
    app.post('/users',function(req, res) {

    	//create a new instance of the User model
	  	var user = new User({
		  	facilitatorIds   :    req.body.facilitatorIds,
		    pictures         :    req.body.pictures 
	  	});
	     
	    //This method save object User in database users  
	  	user.save(function(err) {
	 
	        if(!err) {
		        console.log('USER REGISTRATED');
		        res.json({success : true, userId : user._id});  
	        } else {
		        console.log('ERROR: ' + err);
		        res.json({success : false});    
	        }
	  	});
    });

    //Service login POST ContentType: "application/json"
    app.post('/user',function(req, res) {

    	//This method returns one document that satisfies the specified query criteria 
		User.findOne({ _id : req.body.userId}, function(err, user) {

			if(!err) {
			

		        if(user != null){
		          console.log("FOUND");

		          //response JSON in case of found
                  res.json({success: true, facilitatorIds : user.facilitatorIds});

		        }else{
		          console.log("NOT FOUND");

		          //response JSON in case of not found
		          res.json({success: true, error : null});
		        }      
		    }else {

		        console.log('ERROR: ' + err.name);
		        res.json({success: true, error : err.name}); 
		    }
		})



    });





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


    

}
 
