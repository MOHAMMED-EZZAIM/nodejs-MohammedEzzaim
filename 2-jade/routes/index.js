var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FST Marakech sir 2024:mohammed ezzaim !@#$@!',condition:false ,name:"mohammed ezzaim"});
});
module.exports = router;
