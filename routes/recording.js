const express = require('express');
const recordingRouter = express.Router();
const Recording = require('../models/Recording');
const {sendUploadToGCS} = require('../middleware/gcs');
const { verifyUser } = require('../authenticate');
const bodyParser = require('body-parser')
// const multer = require('multer')
// const {uploadImage} = require("../helpers/helpers")



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
.post(sendUploadToGCS, async (req, res, next) => {
    try {
        console.log('line 24')
        // if (req.files === null |r) {
        //     return res.status(400).json({msg: "Error on upload"})
        // }
        // const myFile = req.file
        // const imageUrl = await uploadImage(myFile)
        console.log('line 30', req.file)
        console.log('line 30', req.files)
        const recordingObj = {
            ...req.body,
            views: 0,
            actions: [],
            comments: [],
            recordingLink: req.file.gcsUrl
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