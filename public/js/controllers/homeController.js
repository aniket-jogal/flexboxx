'use strict';

module.exports = function($scope, $http) {


  var refresh = function () {
         $http.get('/movie/getMovie').success(function (response) {
             console.log('READ IS SUCCESSFUL');
             $scope.moviList = response;

         });
     };
     refresh();

     $scope.setMovie=function(movi)
     {
       sessionStorage
       .setItem('moviName',movi);
      //  $location.path("/show");
     };

  };
