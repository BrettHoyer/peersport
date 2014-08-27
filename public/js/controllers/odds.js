angular.module('OddsController', []).controller('OddsController', function($scope, $http, ApiService){


  $scope.getTeams = function(){
    ApiService.getTeams().success(function(data){
      console.log("returned teams: ", data);
      $scope.teams = data;
    })
  }

  $scope.getWagers = function(){
    ApiService.getWagers().success(function(data){
      console.log("returned wagers: ", data);
      $scope.wagers = data;
    })
  }

  $scope.getUser = function(id){
    ApiService.getUser(id)
      .success(function(data){
        console.log("returned user: ", data);
        $scope.user = data;
      }).error(function(err){
        console.log(err);
      })
  }

  $scope.getGroup = function(id){
    ApiService.getGroup(id).success(function(data){
      console.log("returned group: ", data);
      $scope.group = data;
    })
  }

  $scope.getGroups = function(){
    ApiService.getGroups().success(function(data){
      console.log("returned groups: ", data);
      $scope.groups = data;
    })
  }

  $scope.getWagers();
  $scope.getTeams();
  $scope.getUser(1);
  $scope.getGroups()



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