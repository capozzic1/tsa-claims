import angular from 'angular';
import Services from './services/index.js';
import Controllers from './controllers/index.js';
const app = angular.module('myApp', ['nvd3', 'ngRoute', 'ClaimService', 'Controllers']).config([
  '$locationProvider',
  '$routeProvider',
  function config($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider.when('/bargraph', {templateUrl: 'views/bargraph.template.html'}).when('/linechart', {templateUrl: 'views/linechart.template.html'});
  }
])

// require('./services');
require('./controllers');
