angular.module('OddsController', []).controller('OddsController', function($scope, $http){
	$scope.addOdds = function(){
		$http.post('/newOdds', {data: $scope.oddsFormData}).success(function(data){
			console.log(data);
			$scope.homeTeam = data.addHome
			$scope.awayTeam = data.addAway
			$scope.homeLine = data.addHomeLine
			$scope.awayLine = data.addAwayLine
		})

	}
})