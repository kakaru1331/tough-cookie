var express = require('express');
var router = express.Router();

/* GET users listing. */
router.all('/', function(req, res, next) {
  console.log(req.cookies);
  console.log(req.headers);
  
  res.send('respond with a resource');
});

module.exports = router;
