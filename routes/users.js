const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authenticate = require('../authenticate');
const passport = require('passport');
const cors = require('../middleware/cors');

/* GET users listing. */
router.get('/', cors.corsWithOptions, authenticate.verifyUser, async function(req, res, next) {
	try {
		const users = await User.find().exec();
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(users);
	} catch (error) {
		next(err);
	};
});

router.post('/signup', cors.corsWithOptions, (req, res) => {
    User.register(
        new User({username: req.body.username}),
        req.body.password,
        err => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: err});
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({success: true, status: 'Registration Successful!'});
                });
            }
        }
    );
});

router.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
    const token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
});

router.get('/logout', cors.corsWithOptions, (req, res, next) => {
	if (req.session) {
		req.session.destroy();
		req.clearCookie('sessing-id');
		res.redirect('/');
	} else {
		const err = new Error('You are not logged in!');
		err.status = 401;
		return next(err);
	}
});

module.exports = router;
