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
  .when('/login',{
    templateUrl:'views/login.html',
    controller :'LoginController',
  })
  .when('/admin',{
    templateUrl:'views/admin.html',
    controller :'AdminController',
    resolve: {
        logincheck: checkLoggedin
        }

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
  .when('/seats',{
    templateUrl: 'views/seats.html',
    controller :'SeatsController',
  })
  .when('/payment', {
    templateUrl: 'views/payment.html',
    controller : 'PaymentController',
  })

    .when('/login', {

      templateUrl: 'views/login.html',
      controller: 'LoginController',
    })
    .when('/register', {

      templateUrl: 'views/register.html',
      controller: 'RegisterController',
    })

  .otherwise({
    redirectTo: '/home',
  });

});


var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
    var deferred = $q.defer();

    $http.get('/loggedin').success(function(user)
    {
        $rootScope.errorMessage = null;
        // User is Authenticated
        if (user !== '0')
            deferred.resolve();
        // User is Not Authenticated
        else
        {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/login');
        }
    });

    return deferred.promise;
};


app.controller("NavCtrl", function($rootScope,$scope, $http, $location){
  $scope.logout= function()
  {
     $http.post("/logout").success(function(){
       $location.url('/home');
     });
  }

});
