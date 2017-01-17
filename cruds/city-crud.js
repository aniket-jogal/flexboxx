
var express = require('express');
var router  = express.Router();
bodyParser  = require('body-parser'),
router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');

var citySchema = mongoose.Schema({

  cityName: String,

 });

var City = mongoose.model('City', citySchema, 'city');


router.get('/getCity', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    City.find({}, function (err, docs) {
         res.json(docs);

    });
});

router.get('/getCity/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     City.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addCity', function(req, res){
 console.log(req.body);


  var name = req.body.cityName;

  var city = new City({

    cityName: name,

  });

  city.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });


  })

router.delete('/deleteCity/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      City.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateCity/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    City.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})


// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
