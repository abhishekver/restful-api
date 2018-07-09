const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.locals.connection.query('SELECT WO.EID, P.PName AS ProjectName, M.EName AS ManagerName, E.EName AS EmployeeName FROM Project P LEFT JOIN Employee M ON (P.MID=M.EID) LEFT JOIN Works_On WO on (P.PID=WO.PID) LEFT JOIN Employee E on (E.EID=WO.EID)'
    , (error, results, fields) => {
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