var models = require('./server/models');
var Team = models.Team;
var Game = models.Game;

module.exports = {

  games:{
    new: function(data){
      var game = Game.build(data);
      game.setTeams([data.home_team, data.away_team])
      game.save();
    }
  
  }, 

  teams: {
    new: function(data){

      var team = Team.build(data);
      team.save();

    },

    all: function(req, res){
      Team.findAll().success(function(teams){
        res.send(teams)
      });  
    }

  }
  
    
}


/* */