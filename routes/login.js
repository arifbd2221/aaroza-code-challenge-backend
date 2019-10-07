const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/', async(req, res) => {
    //Login a registered user
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username, password}, function(err,obj) {  });
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ token })
    } catch (error) {
        res.status(400).send(error)
    }

})
module.exports = router;