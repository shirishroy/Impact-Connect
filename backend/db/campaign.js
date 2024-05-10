const mongoose = require('mongoose');
const { dbConnect } = require('./db');

await dbConnect();

const CampaignSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
    },
    requirements : {
        type : Array,
        required : true
    },
    type : {
        type : String,
        required : true
    }
});

const Campaign = mongoose.model('Campaign', CampaignSchema);

module.exports = Campaign;