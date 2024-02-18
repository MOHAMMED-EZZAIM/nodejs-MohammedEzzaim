var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My site Web mohammed ezzaim!!' ,condition:false,anyarry:[15,5,3,8]});
});

module.exports = router;
