import mongoose from "mongoose";
import dotenv from "dotenv";
// mongodb + srv://<username>:<password>@cluster-books.t1kqf.mongodb.net/?retryWrites=true&w=majority&appName=cluster-books
dotenv.config();

export const connectDB = async () => {
    try {
        const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster-books.t1kqf.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=cluster-books`

        await mongoose.connect(uri, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully")

    } catch (error) {
        console.error(error)
        throw new Error('Error connecting to MongoDB')
    }
}