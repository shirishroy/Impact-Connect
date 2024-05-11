const router = require("express").Router();
const Campaign = require("../db/campaign");
const { uploadImage } = require("../Utils");

router.get('/all', async(req,res)=>{
    try{
        const campaigns = await Campaign.find({}).populate({
            path : 'userId',
            select : 'name email'
        }).populate({
            path : 'donors.userId',
            select : 'name email'
        }).populate({
            path : 'volunteers.userId',
            select : 'name email'
        });
        
        res.status(200).json({ 
            success : true,
            campaigns
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({ success : false, error });
    }
});

router.post("/create", async (req, res) => {
    const { title, description, userId, image, video, brochure, startDate, location, endDate, requirements, type } = req.body;
    const imageLink = await uploadImage(image);

    try {
        const campaign = new Campaign({
            title,
            description,
            userId,
            image : imageLink,
            video,
            brochure,
            startDate,
            location,
            endDate,
            requirements,
            type
        });
        const newCampaign = await campaign.save();
        res.status(200).json({ 
            success: true, 
            campaign: newCampaign 
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({ success: false , error });
    }
});

router.post('/donate', async(req,res)=>{
    const { type , campaignId , userId , donation } = req.body;
    try{
        const campaign = await Campaign.findById(campaignId);
        
        if(type === 'money'){
            campaign.donors.push({
                userId,
                donation : {
                    type : "Money",
                    amount : donation
                }
            });
            const requirements = campaign.requirements;
            requirements.forEach(req => {
                if(req.type === 'Money'){
                    req.fulfilled += donation;
                }
            });
        }
        else{
            campaign.donors.push({
                userId,
                donation : {
                    type,
                    amount : donation
                }
            });
            const requirements = campaign.requirements;
            requirements.forEach(req => {
                if(req.type === type){
                    req.fulfilled += donation;
                }
            });
        }
        const newCampaign = await campaign.save();

        res.status(200).json({ 
            success : true,
            campaign : newCampaign
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({ success : false, error });
    }
});

router.post('volunteer', async(req,res)=>{
    const { campaignId , userId, position } = req.body;
    try{
        const campaign = await Campaign.findById(campaignId);
        campaign.volunteers.push({
            userId,
            position
        });
        const newCampaign = await campaign.save();
        res.status(200).json({ 
            success : true,
            campaign : newCampaign
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({ success : false, error });
    }
});

module.exports = router;
