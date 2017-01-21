
var express = require('express');
var router  = express.Router();
bodyParser  = require('body-parser'),

router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({

   moviTitle       : String,
   moviLanguage    : String,
   moviGenre       : String,
   moviPoster      : String,
   moviDirector    : String,
   moviActors      : String,
   moviYear        : String,
   moviRuntime     : String,
   moviDescription : String,
   status          : String
 });

var Movie = mongoose.model('Movie', movieSchema, 'movie');

router.get('/getMovie', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Movie.find({}, function (err, docs) {
         res.json(docs);
    });
});

router.get('/getMovie/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Movie.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/moviPoster/:p', function (req, res) {
    Movie.find({moviTitle:req.params.p}, function (err, docs) {
         res.json(docs);
    });
});

router.post('/addMovie', function(req, res){
 console.log(req.body);

  var title      = req.body.Title      ;
  var language   = req.body.Language   ;
  var genre      = req.body.Genre      ;
  var poster     = req.body.Poster     ;
  var director   = req.body.Director   ;
  var actors     = req.body.Actors     ;
  var year       = req.body.Year       ;
  var runtime    = req.body.Runtime    ;
  var descript   = req.body.Description;

  var movie      = new Movie({

    moviTitle       : title    ,
    moviLanguage    : language ,
    moviGenre       : genre    ,
    moviPoster      : poster   ,
    moviDirector    : director ,
    moviActors      : actors   ,
    moviYear        : year     ,
    moviRuntime     : runtime  ,
    moviDescription : descript ,
    status          : "false"

  });

  movie.save(function(err, docs){
    if ( err ) throw err;
    console.log("Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/deleteMovie/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Movie.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateMovie/:id',function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Movie.findOneAndUpdate({_id:req.params.id}, req.body, function (err, docs) {
      console.log(docs);
      res.json(docs);
    });
})

router.put('/updateMovie/:moviTitle/:val',function(req,res){
  console.log("change status");
  Movie.findOneAndUpdate({moviTitle: req.params.moviTitle},
    {
       $set:{ status:req.params.val}
    },
    function(err,docs){
  res.json(docs);
  });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
