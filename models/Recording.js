const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users'},
    like: {type: Boolean, default: false},
    dislike: {type: Boolean, default: false},
})

const commentSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'users'},
	text: {type: String, required: true},
	name: {type: String },
    actions: [actionSchema],
}, {
    timestamps: true
});

const RecordingSchema = new Schema ({
	user: { type: Schema.Types.ObjectId, ref: 'users'},
    profile: { type: Schema.Types.ObjectId, ref: 'profile'},
    recordingLink: {type: String},
    description: { type: String, required: true },
    rating: { type: Number }, //To be used to determing R/ PG etc
    title: {type: String },
    views: {type: Number },
    actions: [actionSchema],
	comments: [commentSchema],
},{
    timestamps: true
})

module.exports = mongoose.model("Recording", RecordingSchema);