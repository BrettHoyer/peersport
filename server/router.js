db = require('./db.js');
module.exports = function(app, passport){

  app.post('/newWager', function(req, res){
    var data = req.body.data;
    console.log('req', req)
    db.wagers.new(data);
    res.send(req.body.data)
  })
 
  app.post('/newTeam', function(req, res){
    var data = req.body.data;
    console.log('req', req)
    db.teams.new(data);
    res.send(req.body.data)
  })

  app.get('/teams', db.teams.all);
  app.get('/wagers', db.wagers.all);
  app.get('/users', db.users.all);
  app.get('/users/:id', db.users.one);
  app.get('/groups', db.groups.all);  
  app.get('/group/:id', db.groups.one);
}