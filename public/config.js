angular.module('sporting').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: 'HomeController'
    })
    .state('odds', {
      url: "/odds",
      templateUrl: "templates/odds.html",
      controller: 'OddsController'
    })

}).run(['$rootScope', function($rootScope){
  $rootScope.$on('$stateChangeStart', function(){
    console.log('changing states')
  })
}])