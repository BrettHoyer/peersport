var Sequelize  = require('sequelize');
var dbInfo = require('./env').database;
var sequelize = new Sequelize(dbInfo.databaseName, dbInfo.username, dbInfo.password);

var Wager = sequelize.define('Wager', {
      title       : { type: Sequelize.STRING, allowNull: true  },
      home_line   : { type: Sequelize.FLOAT, allowNull: false },
      away_line   : { type: Sequelize.FLOAT, allowNull: false },
      // home_team_id: { type: Sequelize.INTEGER, allowNull: false},
      // away_team_id: { type: Sequelize.INTEGER, allowNull: false},
      active      : { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: true}
    })

var Team = sequelize.define('Team', {
      name : { type: Sequelize.STRING, allowNull: false }
    })


Wager.belongsTo(Team, {foreignKey: 'away_team_id'})
Wager.belongsTo(Team, {foreignKey: 'home_team_id'})
Team.hasMany(Wager, { as: 'AwayGames', foreignKey : 'away_team_id'});
Team.hasMany(Wager, { as: 'HomeGames', foreignKey : 'home_team_id'});


Team.drop();
Wager.drop();

sequelize.sync().success(function(success){
  console.log("CREATED DATABASE TABLES");
  //Mocking Teams

  Team.findOrCreate({name: 'Eagles'})
  Team.findOrCreate({name: 'Redskins'})
  Team.findOrCreate({name: 'Giants'})
  Team.findOrCreate({name: 'Cowboys'})

  //Mocking Wagers

  Wager.findOrCreate({title: "Mock Wager 1", home_team_id: 2, away_team_id: 3, home_line: "-7", away_line: "7"} )
  Wager.findOrCreate({title: "Mock Wager 2", home_team_id: 3, away_team_id: 4, home_line: "-13.5", away_line: "-13.5"} )
  Wager.findOrCreate({title: "Mock Wager 3", home_team_id: 2, away_team_id: 1, home_line: "-5.5", away_line: "5.5"} )
  Wager.findOrCreate({title: "Mock Wager 4", home_team_id: 4, away_team_id: 1, home_line: "-5", away_line: "5"} )
  Wager.findOrCreate({title: "Mock Wager 5", home_team_id: 2, away_team_id: 3, home_line: "-10", away_line: "10"} )
}).error(function(error){
  console.log("ERROR CREATING DATABASE TABLES: ", error);
})


module.exports = {
  Team : Team,
  Wager : Wager
};
