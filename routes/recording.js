const express = require('express');
const recordingRouter = express.Router();
const Recording = require('../models/Recording');
const { verifyUser } = require('../authenticate');


recordingRouter.route('/')
.get(async (req, res, next) => {
    try {
        aRecordings = await Recording.find().exec();
        if (!aRecordings) throw new Error('Profile not found')
        res.json(200, aRecordings);
    } catch (error) {
        next(error);
    };
})
.post(async (req, res, next) => {
    //TODO: add multer middleware
    //TODO: add gcs save middleware, return req.file.gcsFile
    try {
        const recordingObj = {
            ...req.body,
            views: 0,
            actions: [],
            comments: [],
            recordingLink: req.file.gcsFile
        };
        const newRecording = await Recording.create(recordingObj).exec();
        return res.json(200, newRecording);
    } catch (error) {
        next(error);
    };
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /recording');
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /recordin');
});

//TODO: /:recordingId GET, PUT, DELETE

//TODO: /:recordingId/comment GET, POST, 

//TODO: /:recordingId/comment/:commentId GET, POST, PUT, DELETE

//TODO: /:recordingId/action GET POST(Post will handle adding and removing likes)

module.exports = recordingRouter;