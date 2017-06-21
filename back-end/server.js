var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());

var Message = mongoose.model('Message', {
  msg: String
});

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.post('/api/message', function(req, res){
  console.log(req.body);
  var message = new Message(req.body);
  message.save();
  res.status(200);
});

app.get('/api/message', GetMessages);

mongoose.connect("mongodb://localhost:27017/test", function(err, db){
  if(!err){
    console.log("we are connected to mongo");
  } else {
    console.log("unable to connect ot mongo", err);
  }
});

function GetMessages(req, res){
  Message.find({}).exec(function(err, result){
    res.send(result);
  });
}

var server = app.listen(5000, function(){
  console.log('listening on port ', server.address().port);
});
