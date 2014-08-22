angular.module('sporting', [
  // Dependencies
  'ui.router',
  'sporting.controllers',
  'sporting.services'

]);

// Services
angular.module('sporting.services', [

]);

// Controllers
angular.module('sporting.controllers', [
	'HomeController',
	'OddsController'
]);