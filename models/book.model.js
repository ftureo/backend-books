import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    bookAuthor: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    image: {
        publicId: {
            type: String,
            default: null,
        },
        url: {
            type: String,
            default: null,
        }
    },
})

export default mongoose.model('Book', bookSchema)