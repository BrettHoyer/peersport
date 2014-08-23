var Sequelize  = require('sequelize');
var dbInfo = require('./env').database;
var sequelize = new Sequelize(dbInfo.databaseName, dbInfo.username, dbInfo.password);

var Game = sequelize.define('Game', {
      title    : { type: Sequelize.STRING, allowNull: false },
      home_line: { type: Sequelize.STRING, allowNull: false },
      away_line: { type: Sequelize.STRING, allowNull: false }
    })

var Team = sequelize.define('Team', {
      name : { type: Sequelize.STRING, allowNull: false }
    })

Game.sync().success(function(){
  console.log("CREATED OR UPDATED DATABASE TABLE")
})

Team.sync().success(function(){
  console.log('CREATED OR UPDATED DATABASE TABLE')
  Team.findOrCreate({name: 'Eagles'})
  Team.findOrCreate({name: 'Redskins'})
  Team.findOrCreate({name: 'Giants'})
  Team.findOrCreate({name: 'Cowboys'})
})

Game.hasMany(Team);
Team.hasMany(Game);

module.exports = {
  Team : Team,
  Game : Game
}
