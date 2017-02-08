var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // sending the message to wait
  res.render('index', { title: 'Pranav Kural', message: 'Hi, there! this is my portfolio website. It\'s still in construction but you can hope to see something cool soon :)' });
});

module.exports = router;
