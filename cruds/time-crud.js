
var express = require('express');
var router  = express.Router();
bodyParser  = require('body-parser'),

router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');

var ShowTimeSchema = mongoose.Schema({
  showTimeHrs  :String,
  showTimeMins :String,

})

var ShowTime = mongoose.model('ShowTime',ShowTimeSchema,'showtime');

router.get('/getShowTime',function(req,res) {
  console.log("REACHED GET FUNCTION ON SERVER");
  ShowTime.find({},function(err,docs){
    res.json(docs);
  });
});

router.get('/getShowTime/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     ShowTime.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/addShowTime', function(req, res){
 console.log(req.body);

var timehrs = req.body.showTimeHrs;
var timemin = req.body.showTimeMins;

var showtime = new ShowTime({
  showTimeHrs  : timehrs,
  showTimeMins : timemin,
  });

  showtime.save(function(err, docs){
    if ( err ) throw err;
    console.log("Saved Successfully");
    res.json(docs);
  });


  })

router.delete('/deleteShowTime/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      ShowTime.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateShowTime/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    ShowTime.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
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
