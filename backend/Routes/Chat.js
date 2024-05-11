const router = require("express").Router();
const Chat = require("../db/chat");
const { dbConnect } = require("../db/db");

router.post("/createchat", async (req, res) => {
    const { userIds } = req.body;
    await dbConnect();

    try {
        const chat = new Chat({
            userIds: userIds,
            messages: []
        });

        await chat.save();
        res.json({ success: true , chatId : chat._id });

    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;