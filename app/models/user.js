var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
    username: {type: String, lowercase: true, required: true}
})