const router = require("express").Router();
const Chat = require("../models/chat");
const { dbConnect } = require("../models/db");

router.post("/create", async (req, res) => {
    const { userIds } = req.body;

    try {
        const existingChat = await Chat.findOne({ userIds: { $all: userIds } });
        if (existingChat) {
            const existingChatPopulated = await existingChat.populate({
                path: 'userIds',
                select: 'name email'
            });
            return res.json({ 
                success: true, 
                chat: existingChatPopulated,
                isExisting : true
            });
        }

        const chat = new Chat({
            userIds: userIds,
            messages: []
        });

        const newChat = await chat.save();
        const newChatPopulated = await newChat.populate({
            path: 'userIds',
            select: 'name email'
        });        
        res.json({ success: true , chat : newChatPopulated });

    } catch (error) {
        console.log(error);
        res.json({ success: false, error });
    }
});

router.post("/getAll", async (req,res)=>{
    const { userId } = req.body;
    
    try{
        const chats = await Chat.find({ userIds : { $in : [userId]} }).populate({
            path : 'userIds',
            select : 'name email'
        });
        res.json({ success : true , chats });
    }
    catch(error){
        console.log(error);
        res.json({ success : false , error });
    }
});

module.exports = router;