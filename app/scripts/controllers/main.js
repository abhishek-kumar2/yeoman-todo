'use strict';

/**
 * @ngdoc function
 * @name yomanToDoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yomanToDoApp
 */
angular.module('yomanToDoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = ''; console.log($scope.todos);
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
