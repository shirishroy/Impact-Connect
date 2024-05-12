const Chat = require("./chat");
const { dbConnect } = require("./db");

async function saveMessageToDb(data){
    const { senderId, message, to } = data;
    
    await dbConnect();

    try{
        const chat = await Chat.findOne({
            userIds : [ senderId, to ]
        });
        if(!chat){
            throw new Error('Chat not found');
        }
        chat.messages.push({
            senderId,
            message : message,
        });
        const updatedChat = await chat.save();
        console.log('Message saved to DB');
    }
    catch(err){
        console.error(err);
    }
};

module.exports = { saveMessageToDb };