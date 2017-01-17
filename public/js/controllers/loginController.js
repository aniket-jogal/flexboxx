'use strict';

module.exports = function($scope, $http) {

  var refresh = function () {
        $http.get('/user/getUser').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.userList = response;
            $scope.user= "";
        });
    };


}
