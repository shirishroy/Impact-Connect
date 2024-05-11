const mongoose = require('mongoose');

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
        type : [
            {
                "type" : String,
                "required" : Number,
                "fulfilled" : Number,
                "description" : String
            }
        ],
        required : true
    },
    type : {
        type : String,
        required : true
    },
    video : {
        type : String,
    },
    location : {
        type : [String],
        required : true
    },
    brochure : {
        type : String,
    },
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
        required : true
    },
});

const Campaign = mongoose.model('Campaign', CampaignSchema);

module.exports = Campaign;