const express = require('express');
const Actor = require('../models/actor')
const mongoose = require('mongoose');
const router = express.Router();


router.get('/', async(req,res) => {
        
        try{
                
                const actors = await Actor.find();
                res.send(actors);
        }catch(error){
                res.send({error: error.message});
        }

});

module.exports = router;