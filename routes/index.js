var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Karlin' });
});

/* Get Ray's page */
router.get('/Ray', function(req, res, next){
  res.render('Ray', {title:'Ray'});
});

/* Get Marry's page */
router.get('/Marry', function( req, res, next){
  res.render('Marry', {title:'Marry'});
});

/* Get Jay's page */
router.get('/Jayson', function( req, res, next){
  res.render('Jayson', {title:'Jayson'});
});

/* Get Tom's page */
router.get('/Thomas', function( req, res, next){
  res.render('Thomas', {title: 'Thomas'} );
});

/* Get Dan's page */
router.get('/Danny', function( req, res, next){
  res.render('Danny', {title: 'Danny'} );
});


module.exports = router;
