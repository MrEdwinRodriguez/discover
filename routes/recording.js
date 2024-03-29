const express = require('express');
const recordingRouter = express.Router();
const Recording = require('../models/Recording');
const Profile = require('../models/Post');
const {sendUploadToGCS} = require('../middleware/gcs');
const Multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');
const { verifyUser } = require('../authenticate');
const bodyParser = require('body-parser')
const DEFAULT_BUCKET_NAME = "discover_recordings"; 
const gcsHelpers = require('../helpers/google-cloud-storage')
// const storage = gcsHelpers.storage;
const {Storage} = require('@google-cloud/storage');
// const multer = require('multer')
// const {uploadImage} = require("../helpers/helpers")
// const unploadHandler = multer({
//     storage: multerGoogleStorage.storageEngine({
//         autoRetry: true,
//         bucket: DEFAULT_BUCKET_NAME,
//         projectId: storage.projectId,
//         keyFilename: storage.keyFileName,
//         filename: (req, file, cb) => {
//             cb(null, `/projectimages/${Date.now()}_${req.file.originalname}`);
//         }
//     })
// });
const storage = new Storage();
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
  });
  const bucket = storage.bucket(DEFAULT_BUCKET_NAME);

//recording/uplodad  POST
// recordingRouter.route('/upload')
recordingRouter.post('/upload', async (req, res, next) => {
    console.log(req.file)
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }
    
    res.json({"route": '/recording/upload'})
});


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
// .post(async (req, res, next) => {
    try {
        console.log('line 24')
        // if (req.files === null |r) {
        //     return res.status(400).json({msg: "Error on upload"})
        // }
        // const myFile = req.file
        // const imageUrl = await uploadImage(myFile)
        console.log('line 30', req.file)
        console.log('line 30', req.body)
        const recordingObj = {
            ...req.body,
            views: 0,
            actions: [],
            comments: [],
            recordingLink: req.file.gcsUrl
        };
        const newRecording = await Recording.create(recordingObj).exec();
        //recording is linked to a post
        const profile = await Profile.findOne({user: newRecording.user}).exec();
        const postObj = {
            user: req.user._id,
            profile: profile._id,
            text: profile.description,
            actions: [],
            recording: newRecording._id,
            comments: [],
            views: 0
        }
        const newPost = await Post.create(postObj);
        console.log("created new Post: ", newPost);
        return res.json(200, newRecording);
    } catch (error) {
        next(error);
    };
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /recording');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('Delete operation not supported on /recordin');
});

recordingRouter.get("user/:userId")
.get(async (req, res, next) => {
    try {
        const aUserRecordings = await Recording.find({user: req.params.userId}).lean().exec();
        return res.json(200, aUserRecordings);
    } catch (error) {
        next(error); 
    }
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`Post operation not supported on /recording/user/${req.params/userId}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Put operation not supported on /recording/user/${req.params/userId}`);
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end(`Delete operation not supported on /recording/user/${req.params/userId}`);
})


recordingRouter.get('/:recordingId')
.get(async (req, res, next) => {
    try {
        const recording = await Recording.findById(req.params.recordingid).populate('user profile').exec()
        return res.json(200, recording);
    } catch (error) {
        next(error)
    }
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`Post operation not supported on /recording/${req.params/recordingId}`);
})
.put(async (req, res, next) => {
    try {
        let recording = await Recording.findById(req.params.recordingid).exec();
        if (recording.user+"" != req.user._id+"") throw new Error("You are not authorized to update this recording.")
        let updatedRecording = await Recording.findByIdAndUpdate(req.params.recordingId, {$set: req.body}, { new: true }).exec();
        return res.json(200, updatedRecording);
    } catch (error) {
        next(error)
    }
})
.put(async (req, res) => {
    try {
        let recording = await Recording.findById(req.params.recordingid).exec();
        if (recording) {
            if (recording.user+"" == req.user._id+"") {
                if (req.body.recordingLink) {
                    recording.comments.id(req.params.commentId).recordingLink = req.body.recordingLink;
                };
                if (req.body.description) {
                    recording.comments.id(req.params.commentId).description = req.body.description;
                };
                if (req.body.rating) {
                    recording.comments.id(req.params.commentId).rating = req.body.rating;
                };
                if (req.body.title) {
                    recording.comments.id(req.params.commentId).title = req.body.title;
                };
                const updatedRecording = await recording.save();
                return res.json(200, updatedRecording);
            } else {
                throw new Error("You are not authorized to delete this recording.") 
            }
        } else {
            throw new Error (`Recording with id ${req.params.recordingId} not found.`)
        }
    } catch (error) {
        next(error)
    }
})

//TODO: /:recordingId/comment GET, POST, 

//TODO: /:recordingId/comment/:commentId GET, POST, PUT, DELETE
recordingRouter.route('/:recordingId/comments/:commentId')
.get(async (req, res, next) => {
    try {
        const recording = await Recording.findById(req.params.recordingId).populate('comments.user').exec();
        if (recording && recording.comments.id(req.params.commentId)) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(recording.comments.id(req.params.commentId));
        } else if (!recording) {
            let err = new Error(`Recording ${req.params.recordingId} not found`);
            err.status = 404;
            throw err;
        } else {
            let err = new Error(`Comment ${req.params.commentId} not found`);
            err.status = 404;
            throw err;
        }
    } catch (error) {
        next(error)
    };
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /recording/${req.params.recordingId}/comments/${req.params.commentId}`);
})
.put(async (req, res, next) => {
    try {
        let recording = await Recording.findById(req.params.recordingId).exec();
        if (recording && recording.comments.id(req.params.commentId)) {
            if((recording.comments.id(req.params.commentId).author._id).equals(req.user._id)) {
                if (req.body.name) {
                    recording.comments.id(req.params.commentId).name = req.body.name;
                }
                if (req.body.text) {
                    recording.comments.id(req.params.commentId).text = req.body.text;
                }
                await recording.save();
                res.json(200, recording);
            } else {
                let err = new Error('You are not authorized to update this comment!');
                err.status = 403;
                throw err;
            };
        } else if (!recording) {
            let err = new Error(`Recording ${req.params.recordingId} not found`);
            err.status = 404;
            throw err;
        } else {
            let err = new Error(`Comment ${req.params.commentId} not found`);
            err.status = 404;
            throw err;
        };
    } catch (error) {
        next(err);
    };
})
.delete(async (req, res, next) => {
    try {
        let recording = await Recording.findById(req.params.recordingId).exec();
        if (recording && recording.comments.id(req.params.commentId)) {
            if((recording.comments.id(req.params.commentId).author._id).equals(req.user._id)) {
                recording.comments.id(req.params.commentId).remove();
                await recording.save();
                return res.json(200, recording);
            } else {
                let err = new Error('You are not authorized to delete this comment!');
                err.status = 403;
                throw err;
            }
        } else if (!recording) {
            let err = new Error(`Recording ${req.params.recordingId} not found`);
            err.status = 404;
            throw err;
        } else {
            let err = new Error(`Comment ${req.params.commentId} not found`);
            err.status = 404;
            throw err;
        };
    } catch (error) {
        next(error);
    };
});


//TODO: /:recordingId/action GET POST(Post will handle adding and removing likes)
recordingRouter.route('/:recordingId/action')
.get((req, res, next) => {
    res.statusCode = 403;
    res.end(`GET operation not supported on /recording/${req.params.recordingId}/action`);
})
.post(async (req, res, next) => {
    try {
        const { like, dislike } = req.body;
        if (like === dislike) throw new Error('Cannot like and dislike a recording.');
        const recording = await Recording.findById(req.params.recordingId).populate('comments.user').exec();
        if (!recording) throw new Error(`Cannot find recodoring ${req.params.recordingId}.`);
        if (!recording.actions) {
            recording.actions = [{
                user: req.user._id,
                like: like,
                dislike: dislike
            }];
        } else if (recording.actions.find(action => action.user+"" ==  req.user._id+"")) {
            const index = recording.actions.findIndex(action => action.user+"" ==  req.user._id+"");
            recording.actions[index].like = like;
            recording.actions[index].dislike = dislike;
        } else {
            const action = {
                user: req.user._id,
                like: like,
                dislike: dislike
            };
            recording.actions.push(action);
        };
        await recording.save();
        res.json(200, recording);
    } catch(error) {
        next(error); 
    }
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /recording/${req.params.recordingId}/action`);
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end(`Delete operation not supported on /recording/${req.params.recordingId}/action`);
});

module.exports = recordingRouter;