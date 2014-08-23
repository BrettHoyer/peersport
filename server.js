var express = require('express');
var app = express();
var bodyParser = require('body-parser');

db = require('./db');



app.use(bodyParser());    
app.use(express.static(__dirname + '/public'));

app.post('/newOdds', function(req, res){
  var data = req.body.data;
  console.log('req', req)
  db.games.new(data);
	res.send(req.body.data)
})
app.post('/newTeam', function(req, res){
  var data = req.body.data;
  console.log('req', req)
  db.teams.new(data);
  res.send(req.body.data)
})

app.get('/teams', db.teams.all);
app.listen(3000);