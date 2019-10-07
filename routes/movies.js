const express = require('express');
const Movie = require('../models/movie');
const Actor = require('../models/actor');
const router = express.Router();
const CircularJSON = require('circular-json');


router.get('/', async(req,res) => {

/*     var actor = new Actor({name: "lolao", country: "dhaka"});
    

    const m = new Movie(
        {
        title: "keredghasdg",
        rating: "ajas21sdhsud",
        actors: actor
        }
    );

    await m.save(); */

        var m = await Movie.find();

    res.json(m);

});

module.exports = router;