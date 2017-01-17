'use strict';

module.exports = function($scope, $http) {

    $scope.booking = 'booking';
    $http.get('/mapping/getMapping').success(function(response){
    $scope.MapList = response;
    });

  }//line3
