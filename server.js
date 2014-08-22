var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

app.post('/newOdds', function(req, res){
	console.log(req.body.data.addHome)
	res.send(req.body.data)
})
app.listen(3000);