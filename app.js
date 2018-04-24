var app = angular.module('myApp', ['nvd3', 'ngRoute']).config([
  '$locationProvider',
  '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/bargraph', {template: '<bargraph></bargraph>'}).when('/linechart', {template: '<linechart></linechart>'})
  }
])
