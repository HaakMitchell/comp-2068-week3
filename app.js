const express = require('express');
const app = express();

require('dotenv').config();

const path = require('path');

// setting view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/css', express.static('assets/css'));
app.use('/javascrpt', express.static('assets/javascript'));
app.use('/images', express.static('assets/images'));

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
    auth: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    },
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.error(`Error: ${err}`));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const routes = require('./routes.js');
app.use('/', routes);

//start
app.listen(process.env.PORT || 3000, port => console.log
(`Listeing on ${port}`));