var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('root', 'root', {})
  // res.render('index', { title: 'Express' });
  res.sendFile('index.html', { root: path.join(__dirname, '../views') });
});

module.exports = router;
