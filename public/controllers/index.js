import angular from 'angular';
import BargraphController from './bargraph.controller.js';
import LineChartController from './linechart.controller.js';

angular.module('Controllers', []).controller('BargraphController', BargraphController).controller('LineChartController', LineChartController);
