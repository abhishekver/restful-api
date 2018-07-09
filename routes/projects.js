const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
	res.locals.connection.query('SELECT PID, PName, EName FROM Project INNER JOIN Employee ON MID = EID ORDER BY PID', (error, results, fields) => {
		if (error) {
			res.send(JSON.stringify({
				"status": 500,
				"error": error,
				"response": null
			}));
			//If there is error, we send the error in the error section with 500 status
		} else {
			res.send(JSON.stringify({
				"status": 200,
				"error": null,
				"no. of results": results.length,
				"response": results
			}));
			//If there is no error, all is good and response is 200OK.
		}
	});
});

module.exports = router;