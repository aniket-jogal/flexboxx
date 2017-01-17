
var logger   = require('morgan' );
var express  = require('express');

var movies   = require('./cruds/movie-crud'  );
var cinemas  = require('./cruds/cinema-crud' );
var cities   = require('./cruds/city-crud'   );
var showtime = require('./cruds/time-crud'   );
var user     = require('./cruds/user-crud'   );
var maping   = require('./cruds/mapping-crud');
// var seatCrud = require('./cruds/seat-crud'   );

var bodyParser=require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/movie',movies      );
app.use('/cinema',cinemas    );
app.use('/city',cities       );
app.use('/showtime',showtime );
app.use('/mapping',maping    );
//app.use('/user',user         )
// app.use('/seat', seatCrud);

//Database connections
var mongo    = require('mongodb');
var mongoose = require('mongoose');
var dbHost   = 'mongodb://localhost:27017/ani';
mongoose.connect(dbHost);

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
});


if (app.get('env') === 'development') {
  var webpackMiddleware = require("webpack-dev-middleware");
  var webpack = require('webpack');

  var config = require('./webpack.config');

  app.use(webpackMiddleware(webpack(config), {
    publicPath: "/build",

    headers: { "X-Custom-Webpack-Header": "yes" },

    stats: {
      colors: true
    }
  }));

}

var server = app.listen(4000, function () {
  console.log('listening on port 4000 ha ha ha ha');
});
//
