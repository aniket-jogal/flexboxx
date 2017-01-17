'use strict';

module.exports=function($scope,$http){

  var refresh=function(){

      $http.get('/city/getCity').success(function (response) {
        $scope.cityList = response;
      });
      $http.get('/cinema/getCinema/').success(function (response) {
        $scope.cinemaList=response;
      });
      $http.get('/showtime/getShowTime').success(function(response){
        $scope.showList = response;
      });
      $http.get('/movie/getMovie').success(function (response) {
          $scope.moviList=response;
      });

      $http.get('/mapping/getMapping').success(function(response){
        console.log("READ IS SUCCESSFUL");
        $scope.MapList = response;
        $scope.mapin   = "";
      });
  };
  refresh();


  $scope.addMapping=function(mapin){

    $http.post('/mapping/addMapping',mapin).success(function(response){
      console.log(response);
      console.log("MAPPING IS SUCCESSFUL");
      refresh();
    });

      var val='true';
      $http.put('/movie/updateMovie/'+ $scope.mapin.Movie +'/'+val).success(function (response) {
          console.log(response);
        });
        alert('Mapping Saved Successfully');

  };



  $scope.removeMapping = function (mapin) {
      $http.delete('/mapping/deleteMapping/' + mapin._id).success(function (response) {
          console.log(response);
          console.log('DELETED SUCCESSFULLY');
          refresh();
      });

      var val='false';
      $http.put('/movie/updateMovie/'+ mapin.Movie +'/'+val).success(function (response) {
        console.log(response);
      });



  };
  $scope.editMapping = function (mapin) {
       $http.get('/mapping/getMapping/' + mapin._id).success(function (response) {
          $scope.mapin = response[0];
      });
  };

  $scope.updateMapping = function () {
      console.log("REACHED UPDATE");
      console.log($scope.mapin._id);
      $http.put('/mapping/updateMapping/' + $scope.mapin._id, $scope.mapin).success(function (response) {
      console.log(response);
      refresh();
      })
  };
}//line3
