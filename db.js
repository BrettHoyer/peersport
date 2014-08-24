var models = require('./server/models');
var Team = models.Team;
var Wager = models.Wager;

module.exports = {

  wagers:{
    new: function(data){
      new Wager(data).save();
    },

    all: function(req, res){
      new Wager().fetchAll({withRelated: ['home_team', 'away_team']}).then(function(model){
        res.send(model);
      })  
    }
  
  }, 

  teams: {
    new: function(data){

      new Team(data).save()

    },

    all: function(req, res){
      Team.fetchAll().then(function(model){
        res.send(model);
      })
    }

  }
  
    
}


/* */