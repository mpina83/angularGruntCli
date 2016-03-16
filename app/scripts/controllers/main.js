'use strict';

/**
 * @ngdoc function
 * @name angularGruntCliApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGruntCliApp
 */
angular.module('angularGruntCliApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.newTime= new Date();
  });
