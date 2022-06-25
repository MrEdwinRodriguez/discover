const express = require('express');
const genreRouter = express.Router();
const Genre = require("../models/Genre");


genreRouter.route('/')
.get(async (req, res, next) => {
    try {
        const aGenre = await Genre.find().exec();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(aGenre);
    } catch (error) {
        next(error);
    }
})
.post(async (req, res, next) => {
    try {
        console.log('line 19', req.body)
        const newGenre = await Genre.create(req.body);
        console.log("created new Genre: ", newGenre);
        return res.json(200, newGenre);
    } catch (error) {
        next(error);
    };
})
.put(async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /genre');
})
.delete( async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /genre');
});


genreRouter.route('/:genreId')
.get(async (req, res, next) => {
    try {
        oGenre = await Genre.findById(req.params.genreId).exec();
        if (!oGenre) throw new Error('Genre not found')
        res.json(200, oGenre);
    } catch (error) {
        next(error)
    }
})
.post(async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /genre/:genreId');
})
.put(async (req, res, next) => {
    try {
        const oGenre = await Genre.findByIdAndUpdate(req.params.genreId, {$set: req.body}, { new: true });
        if (!oGenre) throw new Error(`Genre not found for id ${req.params.genreId}`);
        res.json(200, oGenre);
    } catch (error) {
        next(error);
    }
})
.delete(async (req, res, next) => {
    try {
        const response = await Genre.findByIdAndDelete(req.params.genreId)
        res.json(200, response);
    } catch (error) {
        next(error);
    }
});


module.exports = genreRouter;