const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from members', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

module.exports = router;