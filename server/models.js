var dbInfo = require('./env').database;
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : dbInfo.username,
    password : dbInfo.password,
    database : dbInfo.databaseName,
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

var Team = bookshelf.Model.extend({
  tableName: 'Teams'
})
var Wager = bookshelf.Model.extend({
  tableName: 'Wagers',
  home_team: function(){
    return this.belongsTo(Team, 'home_team_id');
  },
  away_team: function(){
    return this.belongsTo(Team, 'away_team_id');
  }
});


// Mocking Wagers
// new Wager({title: "SECOND MOCK WITH BOOKSHELF!!!!", home_team_id: 1, away_team_id: 3, home_line: "13.5", away_line: "-13.5"} ).save()
// new Wager({title: "THIRD MOCK WITH BOOKSHELF!!!!", home_team_id: 3, away_team_id: 2, home_line: "-2", away_line: "2"} ).save()
// new Wager({title: "FOURTH MOCK WITH BOOKSHELF!!!!", home_team_id: 4, away_team_id: 1, home_line: "9", away_line: "-9"} ).save()
// new Wager({title: "FIFTH MOCK WITH BOOKSHELF!!!!", home_team_id: 3, away_team_id: 2, home_line: "-1", away_line: "1"} ).save()


module.exports = {
  Team : Team,
  Wager : Wager
};
