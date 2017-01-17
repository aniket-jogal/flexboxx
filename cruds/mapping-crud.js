var express=require('express');
var router = express.Router();

bodyParser= require('body-parser');
 router.use(bodyParser.urlencoded({extended:true}))

 var mongoose = require('mongoose');
 var mappingSchema = mongoose.Schema({
   City        : String,
   Theatre     : String,
   ShowTimings : Array,
   Movie       : String,
   FromDt      : String,
   ToDt        : String
 });

var Mapping = mongoose.model('Mapping',mappingSchema,'mapping');
router.get('/getMapping',function(req,res){
  console.log("REACHED  GET FUNCTION ON SERVER");
  Mapping.find({},function(err,docs){
    res.json(docs);
  });
});
router.get('/getMapping/:id', function(req,res){
  console.log("REACHED GET ID FUNCTION ON SERVER");
  Mapping.find({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});


router.post('/addMapping', function(req, res){
 console.log(req.body);

  var city    = req.body.City       ;
  var theatre = req.body.Theatre    ;
  var movie   = req.body.Movie      ;
  var swtm    = req.body.ShowTimings;
  var frmdt   = req.body.FromDt     ;
  var todt    = req.body.ToDt       ;

  var mapping = new Mapping({
    City        : city,
    Theatre     : theatre,
    Movie       : movie,
    ShowTimings : swtm,
    FromDt      : frmdt,
    ToDt        : todt
  });

  mapping.save(function(err, docs){
    if ( err ) throw err;
    console.log("Saved Successfully");
    res.json(docs);
  });
})

router.delete('/deleteMapping/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Mapping.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateMapping/:id', function(req, res){
  console.log("REACHED PUT");
  console.log(req.body);
  Mapping.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
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
