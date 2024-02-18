var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(
    "<html><h1>mohmmed ezzaim!</h1> <ul><li>HTML</li> <li>JAVASCRIPTE</li><li>UML</li><li>PHP LARAVEL</li></ul></html>"
    );
});

module.exports = router;
