const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users'},
    profile: { type: Schema.Types.ObjectId, ref: 'profile'},
    text: { type: String, required: true },
    actions: [actionSchema],
    recording: { type: Schema.Types.ObjectId, ref: 'recordings'},
    actions: [{type: Schema.Types.ObjectId, ref: 'actions'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'comments'}],
    isPublic: {type: Boolean, default: false},
    views: {type: Number }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);


