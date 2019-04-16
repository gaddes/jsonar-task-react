const express = require('express');
const router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

// TODO: this copied from data.js
router.get('/', function(req, res, next) {
  res.locals.connection.query('SELECT * from members', function (error, results, fields) {
    if(error) throw error;
    res.send(JSON.stringify(results));
  });
});

module.exports = router;
