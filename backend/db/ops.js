const Chat = require("./chat");
const { dbConnect } = require("./db");

async function saveMessageToDb(data){
    const { userId, message, to } = data;
    
    await dbConnect();

    try{
        const chat = await Chat.findOne({
            userIds : [ userId, to ]
        });
        if(!chat){
            throw new Error('Chat not found');
        }
        chat.messages.push({
            senderId : userId,
            message : message,
        });
        await chat.save();
    }
    catch(err){
        console.error(err);
    }
};

module.exports = { saveMessageToDb };