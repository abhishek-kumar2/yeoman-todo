'use strict';

/**
 * @ngdoc function
 * @name yomanToDoApp.controller:HeadctrlCtrl
 * @description
 * # HeadctrlCtrl
 * Controller of the yomanToDoApp
 */
angular.module('yomanToDoApp')
  .controller('HeadctrlCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
