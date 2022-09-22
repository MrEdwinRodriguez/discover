const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Profile = require('../models/Profile');
const authenticate = require('../authenticate');
const passport = require('passport');
const cors = require('../middleware/cors');
const sanatizeObj = require('../helpers/sanatizePayload');

/* GET users listing. */
router.get('/', authenticate.verifyUser, async function(req, res, next) {
	try {
		const users = await User.find().exec();
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(users);
	} catch (error) {
		next(err);
	};
});

router.post('/signup', (req, res) => {
    console.log('line 21')
    User.register(
        new User({
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        }),
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

router.post('/login', passport.authenticate('local'), async (req, res) => {
    const token = authenticate.getToken({_id: req.user._id});``
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const userObj = sanatizeObj.sanatizeUser(req.user);
    const profile = await Profile.findOne({user: userObj._id });

    userObj.profile = profile ? profile : {'city': "Orlando", 'state': "FL", "social": {twitter: "www.twitter.com", facebook: "facebook.com"}};
    res.json({success: true, token: token, user: userObj, status: 'You are successfully logged in!'});
});

router.get('/logout', (req, res, next) => {
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
