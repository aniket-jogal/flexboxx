
var express = require('express');
var router  = express.Router();
bodyParser  = require('body-parser'),

router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

  FirstName :String,
  LastName  :String,
  Address   :String,
  Email     :String,
  ContactNo :String,

});

var User=mongoose.model('User',userSchema,'user');

router.get('/getUser',function(req,res) {
  console.log("REACHED GET FUNCTION ON SERVER");
  User.find({},function(err,docs){
    res.json(docs);
  });
});

router.get('/getUser/:id',function(req,res){
  console.log("REACHED GET ID FUNCTION ON SERVER");
  User.find({_id:req.params.id}, function(err,docs){
    res.json(docs);
  });
});

router.post('/addUser', function(req, res){
 console.log(req.body);

 var fname   = req.body.FirstName;
 var lname   = req.body.LastName;
 var add     = req.body.Address;
 var dob     = req.body.DoB;
 var mail    = req.body.Email;
 var contact = req.body.ContactNo;
 var gender  = req.body.Gender;

 var user    = new User({

  FirstName  : fname,
  LastName   : lname,
  Address    : add,
  DoB        : dob,
  Email      : mail,
  ContactNo  : contact,
  Gender     : gender

  });

  user.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

})
