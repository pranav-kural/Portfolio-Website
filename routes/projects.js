var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pranav Kural', message: 'Hi, there! this is my portfolio website. This is the projects page.' });
});

router.get('/:project_id', function(req, res, next) {
  res.render('index', { title: 'Pranav Kural', message: 'Hi, there! this is my portfolio website. This is one of my awesome projects.' });
});

module.exports = router;