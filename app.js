const express = require('express');
const app = express();

const path = require('path');

// setting view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
const routes = require('./routes.js');
app.use('/', routes);

//start
app.listen(process.env.PORT || 3000, port => console.log
(`Listeing on ${port}`));