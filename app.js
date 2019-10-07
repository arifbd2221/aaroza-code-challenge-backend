const express = require('express');
const acotrsrouter = require('./routes/actor-routes');
const login = require('./routes/login');
const signup = require('./routes/signup');
const movies = require('./routes/movies');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

 mongoose.connect('mongodb+srv://arifbd2221:arif110658@restcluster-bkzx8.mongodb.net/arif?retryWrites=true&w=majority',
    {useNewUrlParser: true,useUnifiedTopology: true},
    ()=> {
            console.log('connected db');
    }
);


app.use(bodyparser.json());

app.use('/api/actors', acotrsrouter);
app.use('/api/user/login', login);
app.use('/api/user/signup',signup);
app.use('/api/movies',movies);


//port number
app.listen(3000);