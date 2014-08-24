var models = require('./server/models');
var Team = models.Team;
var Wager = models.Wager;

module.exports = {

  wagers:{
    new: function(data){
      var wager = Wager.build(data);
      wager.save();
    },

    all: function(req, res){
      Wager.findAll({include: [{model: Team}] }).success(function(wagers){
        res.send(wagers);
      })
    }
  
  }, 

  teams: {
    new: function(data){

      var team = Team.build(data);
      team.save();

    },

    all: function(req, res){
      Team.findAll().success(function(teams){

        res.send(teams);
      });  
    }

  }
  
    
}


/* */