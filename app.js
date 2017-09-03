var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// SET UP TEMPLATE ENGINE
app.set('view engine', 'ejs');

// STATIC FILES
app.use(express.static('./public'));

// FIRE CONTROLLERS
todoController(app);

app.listen('3000');
console.log('Listening to port 3000');