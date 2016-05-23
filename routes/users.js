//We are passing the app variable from app.js and then exporting to be used by whatever calls it in the project.
module.exports = function(app) {

	var User = require('../models/user.js');

	//Service register POST ContentType: "application/json"
    app.post('/register',function(req, res) {

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
    app.post('/login',function(req, res) {



    	//This method returns one document that satisfies the specified query criteria 
		User.findById(req.body.userId, function(err, user) {

			if(!err) {

		        if(user != null){
		          console.log("FOUND");

		          //response JSON in case of found
                  res.json({success: true, facilitatorIds : user.facilitatorIds});

		        }else{
		          console.log("NOT FOUND");

		          //response JSON in case of not found
		          res.json({success: false, error : "User not found"});
		        }      
		    }else {

		    	if(err.name == "CastError"){

		    		console.log('ERROR: ' + err.name);
		    		 //response JSON in case of CastError
		    		res.json({success: false, error : "ID size is invalide"});

		    	}else{

		        console.log('ERROR: ' + err.name);
		        //response JSON in case of any undefined error
		        res.json({success: false, error : err.name}); 

		       }
		    }
		})



    });
    

}
 
