module.exports = function($scope ) {
  var a = sessionStorage.getItem('moviName');
  var b = sessionStorage.getItem('city');
  var c = sessionStorage.getItem('thr');
  var d = sessionStorage.getItem('shotim');
  var e = sessionStorage.getItem('nOfS');
  var f = sessionStorage.getItem('cls');
  var g = sessionStorage.getItem('Amt');


  document.getElementById('movieName').innerHTML= a;
  document.getElementById('cityName').innerHTML= b;
  document.getElementById('thr').innerHTML= c;
  document.getElementById('tim').innerHTML= d;
  document.getElementById('tkt').innerHTML= e;
  document.getElementById('cls').innerHTML= f;
  document.getElementById('amt').innerHTML= g;



$scope.some="sdcsd";

};
