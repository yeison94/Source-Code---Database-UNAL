//Model that includes the information of a user

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	facilitatorIds: { type: Array },
	pictures: 	    { type: Array } 
});

//The collection will be named Users, because mongo takes the plural
module.exports = mongoose.model('User', userSchema);
