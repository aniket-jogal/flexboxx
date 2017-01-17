'use strict';

module.exports = function($scope, $http) {
      
  var refresh = function () {
        $http.get('/city/getCity').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.cityList = response;
            $scope.citee = "";

        });
    };

    refresh();

       $scope.addCity = function (citee) {
         $http.post('/city/addCity', citee).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
       });
   };


    $scope.removeCity = function (citee) {
        $http.delete('/city/deleteCity/' + citee._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCity = function (citee) {
         $http.get('/city/getCity/' + citee._id).success(function (response) {
            $scope.citee = response[0];
        });
    };

    $scope.updateCity = function () {
        console.log("REACHED UPDATE");
        console.log($scope.citee._id);
        $http.put('/city/updateCity/' + $scope.citee._id, $scope.citee).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
