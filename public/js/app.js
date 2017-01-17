'use strict';

var angular = require('angular');
require('angular-route');

var app = angular.module('movieApp' ,['ngRoute']);

require('../css/app.css');
require('./controllers');
// require('./services');

app.config(function($routeProvider){
  $routeProvider.when('/home',{
    templateUrl:'views/home.html',
    controller :'HomeController'
  })
  .when('/movie', {
    templateUrl: 'views/movie.html',
    controller : 'MovieController',
  })
  .when('/cancellation', {
    templateUrl: 'views/cancellation.html',
    controller : 'CancellationController',
  })
  .when('/cinema', {
    templateUrl: 'views/cinema.html',
    controller : 'CinemaController',
  })
  .when('/trailer', {
    templateUrl: 'views/trailer.html',
    controller : 'TrailerController',
  })
  .when('/login',{
    templateUrl:'views/login.html',
    controller :'LoginController',
  })
  .when('/admin',{
    templateUrl:'views/admin.html',
    controller :'AdminController',
  })
  .when('/city', {
    templateUrl: 'views/city.html',
    controller : 'CityController',
  })
  .when('/showtime',{
    templateUrl:'views/showtiming.html',
    controller :'TimeController',
  })
  .when('/mapping',{
    templateUrl:' views/mapping.html',
    controller :'MappingController',
  })
  .when('/show',{
    templateUrl : 'views/show.html',
    controller  :'BookingController',
  })
  .when('/booking',{
    templateUrl: 'views/seats.html',
    controller :'SeatsController',
  })
  // .when('/seatselection',{
  //   templateUrl: 'views/seatselection.html',
  //   controller: 'SeatselectionController'
  // })
.otherwise({
    redirectTo: '/home',
  });

});
