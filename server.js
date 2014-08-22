var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Sequelize  = require('sequelize');
var dbInfo = require('./env').database;
var sequelize = new Sequelize(dbInfo.databaseName, dbInfo.username, dbInfo.password);

var Test = sequelize.define('Test', {
  name: { type: Sequelize.STRING }
})

Test.sync().success(function(){
  console.log("CREATED DATABASE TABLE")
})

var test = Test.build({ name: "brett Hoyer" })

test.save();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.post('/newOdds', function(req, res){
	console.log(req.body.data.addHome)
	res.send(req.body.data)
})
app.listen(3000);