angular.module('OddsController', []).controller('OddsController', function($scope, $http){

  $scope.getTeams = function(){
    $http.get('/teams').success(function(data){
      console.log("returned teams: ", data);
      $scope.teams = data;
    })
  }

  $scope.getWagers = function(){
    $http.get('/wagers').success(function(data){
      console.log("returned wagers: ", data);
      $scope.wagers = data;
    })
  }

  $scope.getWagers();
  $scope.getTeams();

  $scope.selectWager = function(wager, homeOrAway){
    wager.selected = homeOrAway;
  }
	$scope.addOdds = function(){
    console.log($scope.oddsForm)
		$http.post('/newWager', {data: $scope.oddsForm}).success(function(data){
      console.log("posted odds data: ", data);
		})

	}

  $scope.addTeam = function(){
    console.log($scope.teamFormData)
    $http.post('/newTeam', {data: $scope.teamFormData}).success(function(data){
      console.log("posted team data: ", data);
    })
  }
})