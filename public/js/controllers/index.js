'use strict';

var app = require('angular').module('movieApp');

app.controller('HomeController',          require('./homeController'         ));
app.controller('MovieController',         require('./movieController'        ));
app.controller('CancellationController',  require('./cancellationController' ));
app.controller('CinemaController',        require('./cinemaController'       ));
app.controller('LoginController',         require('./loginController'        ));
app.controller('CityController',          require('./cityController'         ));
app.controller('TimeController',          require('./timingController'       ));
app.controller('BookingController',       require('./bookingController'      ));
app.controller('MappingController',       require('./mappingController'      ));
app.controller('AdminController',         require('./adminController'        ));
app.controller('SeatsController',        require('./seatsController'        ));
