'use strict';

module.exports  = function ( $scope, $http){
  
  var refresh   = function(){
    $http.get('/showtime/getShowTime').success(function(response){
      console.log("READ IS SUCCESSFUL")
      $scope.showList = response;
      $scope.tim      = "";
    });
  };
  refresh();

  $scope.addShowTime = function(tim){
    $http.post('/showtime/addShowTime', tim).success(function(response){
      console.log(response);
      console.log("CREATE SUCCESSFULLY");
      refresh();
    });
  };

  $scope.removeShowTime = function(tim){
    $http.delete('/showtime/deleteShowTime/'+ tim._id).success(function(response){
      console.log(response);
      console.log("DELETED SUCCESSFULLY");
      refresh();
    });
  };

  $scope.editShowTime = function(tim){
    $http.get('/showtime/getShowTime/'+ tim._id).success(function(response){
      $scope.tim=response[0];
    });
  };

  $scope.updateShowTime=function(tim){
    console.log("REACHED UPDATE");
    console.log($scope.tim._id);
    $http.put('/showtime/updateShowTime/' + $scope.tim._id,$scope.tim).success(function(response){
      console.log(response)
      refresh();
    });
  };
};//line 3
