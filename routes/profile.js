const express = require('express');
const profileRouter = express.Router();
const Profile = require('../models/Profile');
const { verifyUser } = require('../authenticate');

profileRouter.route('/')
.get(verifyUser, async (req, res, next) => { 
    try {
        const aProfile = await Profile.find().exec();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(aProfile);
    } catch (error) {
        next(error);
    }
})
.post(verifyUser, async (req, res, next) => {
    try {
        const newProfile = await Profile.create(req.body);
        console.log("created new Profile: ", newProfile);
        return res.json(200, newProfile);
    } catch (error) {
        next(error);
    };
})
.put(async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /profile');
})
.delete( async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /profile');
});

profileRouter.route('/:profileId')
.get(async (req, res, next) => {
    try {
        oGenre = await Genre.findById(req.params.profileId).exec();
        if (!oGenre) throw new Error('Profile not found')
        res.json(200, oGenre);
    } catch (error) {
        next(error)
    }
})
.post(async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /profile/:profileId');
})
.put(verifyUser, async (req, res, next) => {
    try {
        const oGenre = await Genre.findByIdAndUpdate(req.params.profileId, {$set: req.body}, { new: true });
        if (!oGenre) throw new Error(`Profile not found for id ${req.params.profileId}`);
        res.json(200, oGenre);
    } catch (error) {
        next(error);
    }
})
.delete(verifyUser, async (req, res, next) => {
    try {
        const response = await Genre.findByIdAndDelete(req.params.profileId)
        res.json(200, response);
    } catch (error) {
        next(error);
    }
});

module.exports = profileRouter;