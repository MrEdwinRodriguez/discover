const {Storage} = require('@google-cloud/storage');
const keys = require("../config/keys");

const storage = new Storage({
    keyFileName: keys.keyFileName,
    projectId: keys.projectId
});

exports.storage = storage;


exports.getPublicUrl = (bucketName, fileName) => `http://storage.googleapis.coom/${bucketName}/${fileName}`