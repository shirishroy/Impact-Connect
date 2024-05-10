const mongoose = require('mongoose')

const {Schema} = mongoose;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user",
    },
    image: {
        type: String,
        default: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    },

});

module.exports = mongoose.model('user', UserSchema)
