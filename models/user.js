//Model that includes the information of a user

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	facilitatorIds: { type: Array },
	pictures: 	    { type: Array } 
});

//La coleccion se llamara Users, ya que mongo toma el plural
module.exports = mongoose.model('User', userSchema);
