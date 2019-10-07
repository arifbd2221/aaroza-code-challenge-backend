var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var uniqueValidator = require('mongoose-unique-validator');

var User = mongoose.Schema({
    username: {type: String,unique: true},
    password: String
});

User.methods.generateAuthToken = async function() {
    
    const user = this;
    const token = jwt.sign({_id: user._id}, 'shhhhh');
    
    await user.save();
    return token;
}


User.plugin(uniqueValidator);

module.exports = mongoose.model('user',User);