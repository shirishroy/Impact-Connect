const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const fs = require('fs');

const cloudinaryConfig = cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImage = async (image) => {
    const res = await cloudinary.uploader.upload(image, {
        folder: 'impact-connect'
    });
    console.log(res);
    return res.public_id;
}

module.exports = { uploadImage };