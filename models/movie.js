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
});

var Movie = mongoose.Schema({
    title: {type: String, default: "title"},
    year: {type: Date, default:Date.now},
    rating: {type: String, default:"rating"},
    actors: {type: [actorschema]}
},{versionKey: false});

Movie.plugin(mongooseHidden);

module.exports = mongoose.model('movie',Movie);