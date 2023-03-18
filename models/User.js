const mongoose = require('mongoose')
const schema = mongoose.schema

const UserLoginSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
}, { timestamps: true})

const User = mongoose.model('User', UserLoginSchema)
module.exports = User