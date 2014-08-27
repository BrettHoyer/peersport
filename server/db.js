var models = require('./models');
var Team = models.Team;
var Wager = models.Wager;
var Group = models.Group;
var User = models.User;

module.exports = {

  wagers:{
    new: function(data){
      new Wager(data).save();
    },

    all: function(req, res){
      new Wager().fetchAll({withRelated: ['home_team', 'away_team']}).then(function(model){
        res.send(model);
      });  
    }
  
  }, 

  teams: {
    new: function(data){

      new Team(data).save();

    },

    all: function(req, res){

      Team.fetchAll().then(function(model){
        res.send(model);
      });
    }

  },

  users: {
    new: function(data){

      new User(data).save();

    },

    one: function(req, res){
      User.where({id: req.params.id}).fetch({withRelated: ['groups']}).then(function(model){
        res.send(model);
      })
    },

    all: function(req, res){

      User.where({id: req.params.id}).fetch({withRelated: ['groups']}).then(function(model){
        res.send(model);
      });

    }

  },

  groups: {
    new: function(data){

      new User(data).save();

    },

    one: function(req, res){

      Group.where({id: req.params.id}).fetch({withRelated: ['users']}).then(function(model){
        res.send(model);
      });

    },

    all: function(req, res){

      Group.fetchAll({withRelated: ['users']}).then(function(model){
        res.send(model);
      });
    }

  }
  
    
}


/* */