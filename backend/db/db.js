require('dotenv').config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = async()=>{
    try{
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.error(err);
    }
}

module.exports = { dbConnect };