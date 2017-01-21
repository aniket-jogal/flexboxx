
module.exports = function($scope, $http,$rootScope,$location){

  var ref=function(){
    $http.get('/mapping/getmapping').success(function(response){
      $scope.mapping=response;
    });
  };

ref();

    var show = function(){
    var data = sessionStorage.getItem('moviName');
    $http.get('/mapping/selectMovie/'+ data).success(function(response){
      $scope.booking=response;
    });

      $http.get('/movie/moviPoster/'+ data).success(function(response){
        $rootScope.movi=response;
        sessionStorage.setItem('moviePoster',$rootScope.movi);
      });

  };
  show();

  $scope.movieDates=[];
  var Dates=function() {
  for(i=0;i<6;i++)
  {
    var date=new Date();
    date.setDate(date.getDate()+i);
    $scope.movieDates[i]=date;
  }
  };
  Dates();

  $scope.setShow=function(a,b,c,d)
  {
    $rootScope.movieShow=a;
    sessionStorage.setItem('Show',$rootScope.movieShow);
    sessionStorage.setItem('Theatre',b);
    sessionStorage.setItem('Date',c);
    sessionStorage.setItem('City',d);
    $location.path("/seats");
    };


}//line3
