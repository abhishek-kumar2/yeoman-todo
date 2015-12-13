'use strict';

/**
 * @ngdoc overview
 * @name yomanToDoApp
 * @description
 * # yomanToDoApp
 *
 * Main module of the application.
 */
angular
  .module('yomanToDoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
