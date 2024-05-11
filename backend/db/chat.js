const mongoose = require('mongoose');
const { dbConnect } = require('./db');

await dbConnect();

const chatSchema = new mongoose.Schema({
    userIds : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }],
    messages : [{
        senderId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
            required : true
        },
        message : {
            type : String,
            required : true
        },
        timestamp : {
            type : Date,
            default : Date.now
        }
    }]
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;