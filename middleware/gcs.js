const gcsHelpers = require('../helpers/google-cloud-storage');  
const storage = gcsHelpers.storage;
const DEFAULT_BUCKET_NAME = "discover_recordings"; 

exports.sendUploadToGCS = async (req, res, next) => {
	// req.file = req.file.file;
	// if (!req.file) {
	// 	return next();
	// }
	console.log('file uploaded: ', req.file)
	const bucketName = req.body.bucketName || DEFAULT_BUCKET_NAME;
	const bucket = storage.bucket(bucketName);
	const name = req.body.name.replace(" ", '_')
	console.log('line 16', name)
	const gcsFileName = Date.now()+"_"+name;
	console.log('line 17', gcsFileName)
	const file = bucket.file(gcsFileName);
	console.log('line 19', bucket)
	const stream = file.createWriteStream({
		resumable: false,
		metadata: {
			contentType: req.file.mimetype,
		},
	});
	stream.on('error', (err) => {
		req.file.cloudStorageError = err;
		next(err)
	});
	stream.on('finish', () => {
		console.log('uploaded succesfully')
		req.file.cloudStorageObject = gcsFileName;
		return file.makePublic()
		.then(() => {
			req.file.gcsUrl = gcsHelpers.getPublicUrl(bucketName, gcsFileName);
			next()
		});
	});
	console.log('BUFFER; ', req.file.buffer)
	stream.end(req.file.data);
};

async function deleteFileGCS(filename) {
	console.log('IN DELETE FILE FROM GCS')
	const bucketName =  DEFAULT_BUCKET_NAME;
	await storage.bucket(bucketName).file(filename).delete();
	console.log(`gs://${bucketName}/${filename} deleted.`);
}
exports.deleteFileGCS = deleteFileGCS;