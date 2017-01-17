
var express = require('express');
var router  = express.Router();
bodyParser  = require('body-parser'),

router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');

var cinemaSchema = mongoose.Schema({
  theatresName     : String,
  theatresCity     : String,
  theatresLocation : String
 });

var Cinema = mongoose.model('Cinema', cinemaSchema, 'cinema');

router.get('/getCinema', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Cinema.find({}, function (err, docs) {
      res.json(docs);
    });
});

router.get('/getCinema/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Cinema.find({_id: req.params.id}, function (err, docs) {
       res.json(docs);

    });
});

router.post('/addCinema', function(req, res){
 console.log(req.body);

  var name = req.body.theatresName    ;
  var city = req.body.theatresCity    ;
  var loca = req.body.theatresLocation;

  var cinema = new Cinema({

    theatresName     :name,
    theatresCity     :city,
    theatresLocation :loca

  });

  cinema.save(function(err, docs){
    if ( err ) throw err;
    console.log("Saved Successfully");
    res.json(docs);
  });
})

router.delete('/deleteCinema/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Cinema.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateCinema/:id', function(req, res){
  console.log("REACHED PUT");
  console.log(req.body);
  Cinema.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
    console.log(data);
    res.json(data);
    });
})



router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
