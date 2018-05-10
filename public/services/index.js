import ClaimService from './ClaimService.js';
import angular from 'angular';
const module = angular.module('ClaimService', []).service('ClaimService', ClaimService);

export default module;
