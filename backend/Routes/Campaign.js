const router = require("express").Router();
const Campaign = require("../db/campaign");
const { uploadImage } = require("../Utils");

router.get('/getall', async(req,res)=>{
    try{
        const campaigns = await Campaign.find({}).populate({
            path : 'userId',
            select : 'name email image'
        }).populate({
            path : 'donors.userId',
            select : 'name email image'
        }).populate({
            path : 'volunteers.userId',
            select : 'name email image'
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

router.get('/get/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        const campaign = await Campaign.findById(id).populate({
            path : 'userId',
            select : 'name email image'
        }).populate({
            path : 'donors.userId',
            select : 'name email image'
        }).populate({
            path : 'volunteers.userId',
            select : 'name email image'
        });
        
        res.status(200).json({ 
            success : true,
            campaign
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({ success : false, error });
    }
});

router.post("/create", async (req, res) => {
    const { title, description, userId, image, video, brochure, location, requirements, type } = req.body;
    const imageLink = await uploadImage(image);

    try {
        const campaign = new Campaign({
            title,
            description,
            userId,
            image : imageLink,
            video,
            brochure,
            location,
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
    const { campaignId , userId } = req.body;
    try{
        const campaign = await Campaign.findById(campaignId);
        campaign.donors.push({
            userId,
            donation : {
                type : "Money",
                amount : 500
            }
        });
        // const newRequirements = campaign.requirements.forEach(req => {
        //     if(req.type === 'Money'){
        //         req.fulfilled += 500;
        //     }
        //     return req;
        // });
        // campaign.requirements = newRequirements;        
        await campaign.save();

        const populatedCampaign = await Campaign.find({ _id : campaignId }).populate({
            path : 'userId',
            select : 'name email image'
        }).populate({
            path : 'donors.userId',
            select : 'name email image'
        }).populate({
            path : 'volunteers.userId',
            select : 'name email image'
        });

        res.status(200).json({ 
            success : true,
            campaign : populatedCampaign[0]
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({ success : false, error });
    }
});

router.post('/volunteer', async(req,res)=>{
    const { campaignId , userId } = req.body;
    // console.log(req.body);
    try{
        const campaign = await Campaign.findById(campaignId);
        let position = 'Volunteer'
        const newRequirements = campaign.requirements.map(requirement => {
            if (requirement.type.includes('Volunteer')) {
                requirement.fulfilled += 1;
                return requirement;
            }
            return requirement;
        });
        campaign.volunteers.push({
            userId,
            position
        });
        campaign.requirements = newRequirements;

        await campaign.save();
        // console.log(newCampaign);

        const populatedCampaign = await Campaign.find({ _id : campaignId }).populate({
            path : 'userId',
            select : 'name email image'
        }).populate({
            path : 'donors.userId',
            select : 'name email image'
        }).populate({
            path : 'volunteers.userId',
            select : 'name email image'
        });

        res.status(200).json({ 
            success : true,
            campaign : populatedCampaign[0]
        });
    }
    catch(error){
        console.log(error);
        res.status(400).json({ success : false, error });
    }
});

module.exports = router;
