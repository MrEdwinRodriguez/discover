const {format} = require('util');
const express = require('express');
const Multer = require('multer');
const {Storage} = require('@google-cloud/storage');
// Instantiate a storage client
const storage = new Storage();
// Multer is required to process file uploads and make them available via
// req.files.
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
  });

  // A bucket is a container for objects (files).
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

module.exports = uploadImage = (file) => new Promise((resolve, reject) => {
    const { name, buffer } = file
    const blob = bucket.file(name.replace(/ /g, "_"))
    
    console.log(blob)
    const blobStream = blob.createWriteStream({
        resumable: false
    })
    blobStream.on('finish', () => {
        const publicUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        )
        resolve(publicUrl)
    })
    .on('error', () => {
        reject(`Unable to upload image, something went wrong`)
    })
    .end(buffer)
  })