var mongoose = require('mongoose');
let mongooseHidden = require("mongoose-hidden")();

var actorschema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    country: {
        type: String,
        default: ''
    }
    
}, {versionKey: false});

actorschema.plugin(mongooseHidden);

module.exports = mongoose.model('actor',actorschema);