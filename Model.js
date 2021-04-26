var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
/* By default each Schema contains _id property as a unique field*/
var userSchema = new Schema({
    emailId: String,
    firstName: String,
    lastName: String,
    password: String
});
exports.userModel = mongoose.model('User', userSchema);