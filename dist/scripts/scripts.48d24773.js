"use strict";angular.module("yomanToDoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("yomanToDoApp").controller("MainCtrl",["$scope",function(a){a.todos=["Item 1","Item 2","Item 3"],a.addTodo=function(){a.todos.push(a.todo),a.todo="",console.log(a.todos)},a.removeTodo=function(b){a.todos.splice(b,1)}}]),angular.module("yomanToDoApp").controller("HeadctrlCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("yomanToDoApp").controller("HeadHeadctrlCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);