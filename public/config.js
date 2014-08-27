angular.module('sporting').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .state('odds', {
      url: '/odds',
      templateUrl: 'templates/odds.html',
      controller: 'OddsController'
    })
    .state('groups', {
      url: '/groups',
      templateUrl: 'templates/groups.html',
      controller: 'GroupsController',
      resolve: {
        myGroups: ['ApiService', function(ApiService){
          return ApiService.getGroups()
        }]
      }
    })

}).run(['$rootScope', 'ApiService', function($rootScope, ApiService){
  ApiService.getUser(1).success(function(data){
      $rootScope.user = data;
  })

  $rootScope.$on('$stateChangeStart', function(){
    console.log('changing states')
  })
}])