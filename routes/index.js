var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // sending the message to wait
  res.render('index', { title: 'Home', message: 'Hi, there! this is my portfolio website. It\'s still in construction but you can hope to see something cool soon :)' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', message: 'Hi, there! this is my portfolio website. This is the about page.' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', message: 'Hi, there! this is my portfolio website. You can contact me anytime.' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', message: 'Hi, there! this is my portfolio website. These are the services I provide.' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', message: 'Hi, there! this is my portfolio website. This is the projects page.' });
});

module.exports = router;