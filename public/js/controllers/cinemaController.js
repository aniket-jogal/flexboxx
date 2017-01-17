'use strict';

module.exports = function($scope, $http) {


  var refresh = function () {

        $http.get('/city/getCity').success(function (response) {
          $scope.cityList = response;
         });

        $http.get('/cinema/getCinema/').success(function (response) {
          console.log('READ IS SUCCESSFUL');
          $scope.cinemaList=response;
          $scope.thtr = '';
        });
    };
    refresh();

    $scope.addCinema = function (thtr) {
            $http.post('/cinema/addCinema/',thtr).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();

          });

      };

    $scope.removeCinema = function (thtr) {
        $http.delete('/cinema/deleteCinema/' + thtr._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCinema = function (thtr) {
         $http.get('/cinema/getCinema/' + thtr._id).success(function (response) {
            $scope.thtr = response[0];
        });
    };

    $scope.updateCinema = function () {
        console.log("REACHED UPDATE");
        console.log($scope.thtr._id);
        $http.put('/cinema/updateCinema/' + $scope.thtr._id, $scope.thtr).success(function (response) {
            console.log(response);
            refresh();
        });
    };
};
