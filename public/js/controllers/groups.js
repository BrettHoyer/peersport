angular.module('GroupsController', []).controller('GroupsController', function($scope, $http, myGroups){
  $scope.groups = myGroups.data;
});