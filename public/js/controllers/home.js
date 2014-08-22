angular.module('HomeController', []).controller('HomeController', function($scope, $http){

  $scope.getInfo = function(){
  	$http.get('/info').success(function(data){
  		$scope.test = data
  	});
  }
});