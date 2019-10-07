const express = require('express');
const User = require('../models/user');
const router = express.Router();

var msg = "Username is already exists!";

router.post('/', async (req, res) => {
    // Create a new user
    const name = JSON.stringify(req.body);
    
    const checkuser = await User.findOne({username: name}, function(err,obj) {  });

    if (checkuser != null)
        {
            res.send(msg);
        }
   
        try {
            const user = new User({
                username: req.body.username,
                password: req.body.password
            });
            await user.save();
           
            const token = await user.generateAuthToken();
            res.status(201).send({token });
        } catch (error) {
            res.status(400).send(error.message);
        }
    
    
    
})
module.exports = router;