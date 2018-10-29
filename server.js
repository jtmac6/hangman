var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var morgan = require('morgan')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/hangmandb')

var db = mongoose.connection
db.on('error', console.error.bind(console, "Can't connect to MongoDB"))
db.once('open', function(){
    console.log("Successfully connected to MongoDB!")
})

app.use(morgan('dev'));

app.get('/home', function(req, res){
    res.send('Hello from home')
})

app.get('/', function(req, res){
    res.send("Hello World!")
})

app.listen(port, function(){
    console.log("Running server on port " + port)
});

