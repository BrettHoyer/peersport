angular.module('OddsController', []).controller('OddsController', function($scope, $http){

  $scope.getTeams = function(){
    $http.get('/teams').success(function(data){
      console.log("returned Data: ", data);
      $scope.teams = data;
    })
  }

  $scope.getTeams()
	$scope.addOdds = function(){
    console.log($scope.oddsForm)
		$http.post('/newOdds', {data: $scope.oddsForm}).success(function(data){
      console.log("returned Data: ", data);
		})

	}

  $scope.addTeam = function(){
    console.log($scope.teamFormData)
    $http.post('/newTeam', {data: $scope.teamFormData}).success(function(data){
      console.log("returned Data: ", data);
    })

  }
})