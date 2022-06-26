const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, //, required: true
    first_name: { type: String, required: true },
    last_name: { type: String, required: true }, //, required: true
    // country: { type: Number, ref: 'Country' },
    status: {type: String, enum: ['Inactive', 'Active'], default: "Active"},
    is_admin: { type: Boolean, default: false },
    reset_password_token: String,
    reset_password_expires: Date,
    last_login:  { type: Date, default: Date.now },
  }, {
    timestamps: true
  });

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);

