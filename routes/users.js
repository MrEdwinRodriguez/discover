const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', async function(req, res, next) {
	try {
		const users = await User.find().exec();
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(users);
	} catch (error) {
		next(err);
	};
});

router.post('/signup', async (req, res, next) => {
	try {
		//TODO register
		user = 'test'
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(user);
	} catch (error) {
		next(err);
	}
});

router.post('/login', (req, res) => {
	//TODO login
	//get Token
});

router.get('/logout', (req, res, next) => {
	//todo login
	//clear cookie
	//
});

module.exports = router;
