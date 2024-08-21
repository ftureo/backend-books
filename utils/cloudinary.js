import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageToCloudinary = async (filePath) => {
    try {
        return await cloudinary.uploader.upload(filePath, {
            folder: 'books-mern',
        })
    } catch (error) {
        console.error(error)
        throw new Error('Error uploading image to cloudinary')
    }
}

const deleteImageFromCloudinary = async (publicId) => {
    return await cloudinary.uploader.destroy(publicId)
}

export {
    uploadImageToCloudinary,
    deleteImageFromCloudinary
}