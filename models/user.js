var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	provider: 		{type: String},
	providerId: 	{type: String},
	username: 		{type: String},

	css: 			{type: String}
})

module.exports = mongoose.model('Users', UserSchema)