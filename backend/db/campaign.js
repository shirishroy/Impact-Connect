const mongoose = require('mongoose');

const requirementSchema = new mongoose.Schema({
    type : {
        type : String,
        required : true
    },
    required : {
        type : Number,
        required : true
    }
});

const CampaignSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
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
        default : ""
    },
    requirements : {
        type : [requirementSchema],
        required : true
    },
    type : {
        type : String,
        required : true
    },
    video : {
        type : String,
        default : ""
    },
    location : {
        type : String,
        required : true
    },
    brochure : {
        type : String,
    },
    startDate : {
        type : Date,
        default : Date.now
    },
    endDate : {
        type : Date,
        required : false
    },
    donors : {
        type : [
            {
                "userId" : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : 'user'
                },
                "donation" : [
                    {
                        "type" : String,
                        "amount" : Number
                    }
                ]
            }
        ],
        default : []
    },
    volunteers : {
        type : [
            {
                "userId" : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : 'user'
                },
                "position" : String
            }
        ],
        default : []
    }
});

const Campaign = mongoose.model('Campaign', CampaignSchema);

module.exports = Campaign;