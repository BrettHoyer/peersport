var bcrypt   = require('bcrypt-nodejs');
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

knex.schema.hasTable('Teams').then(function(exists){
  if(!exists){
    knex.schema.createTable('Teams', function (table) {
      table.increments();
      table.string('name');
      table.timestamps();
    }).then(function(){
      console.log('Created Table Teams');
      // Mocking Teams
      new Team({name: 'Eagles'}).save();
      new Team({name: 'Redskins'}).save();
      new Team({name: 'Giants'}).save();
      new Team({name: 'Cowboys'}).save();
    })
  } else {
    console.log('Teams table already initialized');
  }
})
knex.schema.hasTable('Groups').then(function(exists){
  if(!exists){
    knex.schema.createTable('Groups', function (table) {
      table.increments();
      table.string('name');
      table.timestamps();
    }).then(function(){
      console.log('Created Table Groups');
      // Mocking Groups
    })
  } else {
    console.log('Groups table already initialized');
  }
})

knex.schema.hasTable('Users').then(function(exists){
  if(!exists){
    knex.schema.createTable('Users', function (table) {
      table.increments();
      table.string('name');
      table.string('password');
      table.timestamps();
    }).then(function () {
      console.log('Created Table Users');
      // Mocking user;
      new User({name: 'Brett Hoyer Mock User'}).save().then(function(user){
        var mockGroup = new Group({name: 'Brett Group 1'});
        return user.groups().create(mockGroup)
      }).then(function(relation){
          console.log('relation', relation)
          console.log('created relation users_groups')
      });
    })
  } else{
    console.log('Users table already initialized');
  }
})


knex.schema.hasTable('Groups_Users').then(function(exists){
  if(!exists){
    knex.schema.createTable('Groups_Users', function (table) {
      table.increments();
      table.integer('user_id');
      table.integer('group_id');
      table.timestamps();
    }).then(function () {
      console.log('Created Table Users_Groups');
      // Mocking user;
    })
  } else{
    console.log('Users_Groups table already initialized');
  }
})

knex.schema.hasTable('Wagers').then(function(exists){
  if(!exists){
    knex.schema.createTable('Wagers', function (table) {
      table.increments();
      table.string('title');
      table.float('home_line');
      table.float('away_line');
      table.integer('away_team_id');
      table.integer('home_team_id');
      table.timestamps();
    }).then(function () {
      console.log('Created Table Wagers');
      // Mocking Wagers
      new Wager({title: "First MOCK WITH BOOKSHELF!!!!", home_team_id: 2, away_team_id: 4, home_line: "13.5", away_line: "-13.5"} ).save()
      new Wager({title: "SECOND MOCK WITH BOOKSHELF!!!!", home_team_id: 1, away_team_id: 3, home_line: "13.5", away_line: "-13.5"} ).save()
      new Wager({title: "THIRD MOCK WITH BOOKSHELF!!!!", home_team_id: 3, away_team_id: 2, home_line: "-2", away_line: "2"} ).save()
      new Wager({title: "FOURTH MOCK WITH BOOKSHELF!!!!", home_team_id: 4, away_team_id: 1, home_line: "9", away_line: "-9"} ).save()
      new Wager({title: "FIFTH MOCK WITH BOOKSHELF!!!!", home_team_id: 3, away_team_id: 2, home_line: "-1", away_line: "1"} ).save()

    })
  } else{
    console.log('Wagers table already initialized');
  }
})

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

var Group = bookshelf.Model.extend({
  tableName: 'Groups',
  users: function(){
   return this.belongsToMany(User);
  }
})

var User = bookshelf.Model.extend({
  tableName: 'Users',
  groups: function(){
    return this.belongsToMany(Group);
  }

})




module.exports = {
  Team : Team,
  Wager : Wager,
  Group : Group,
  User : User 
};
