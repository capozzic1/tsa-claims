import ClaimService from './ClaimService.js';
import angular from 'angular';
const module = angular.module('ClaimService', []).service('ClaimService', ClaimService);

export default module;
// var module = angular.module('myApp.controllers', [])
//   .controller('Controller1', Controller1)
//   .controller('Controller2', Controller2);
//
// export default module;