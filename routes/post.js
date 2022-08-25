const express = require('express');
const postRouter = express.Router();
const Post = require('../models/Post');
const Profile = require('../models/Profile');
const { verifyUser } = require('../authenticate');

postRouter.route('/')
.get(async (req, res, next) => {
    try {
        const aPost = await Post.find().populate('user profile comments actions').exec();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(aPost);
    } catch (error) {
        next(error);
    }
})
.post(verifyUser, async (req, res, next) => {
    try {
        console.log('line 20 ', req.body)
        console.log('line 20 ', req.user)
        return res.json(200, {success: true});
        // const profile = await Profile.findOne({user: req.body._id}).exec()
        // const postObject = {
        //     profile: profile ? profile._id : null,
        //     user: req.body._id,
        //     text: req.body.text,
        //     actions: [],
        //     comments: [],
        //     views: 0
        // };
        // const newPost = await Post.create(postObject);
        // console.log("created new Post: ", newPost);
        // return res.json(200, newPost);
    } catch (error) {
        next(error);
    };
})
.put(async (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /post');
})
.delete(async (req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /post');
});

postRouter.route('/:postId')
.get(async (req, res, next) => {
    try {
        oPost = await Post.findById(req.params.postId).populate('user profile comments actions').exec();
        if (!oPost) throw new Error('Post not found')
        res.json(200, oPost);
    } catch (error) {
        next(error)
    }
})
.post(async (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not supported on /post/:postId');
})
.put(verifyUser, async (req, res, next) => {
    try {
        const oPost = await Post.findByIdAndUpdate(req.params.postId, {$set: req.body}, { new: true });
        if (!oPost) throw new Error(`Post not found for id ${req.params.postId}`);
        res.json(200, oPost);
    } catch (error) {
        next(error);
    }
})
.delete(verifyUser, async (req, res, next) => {
    try {
        const response = await Post.findByIdAndDelete(req.params.postId)
        res.json(200, {message: "success", _id: response._id });
    } catch (error) {
        next(error);
    }
});

module.exports = postRouter;