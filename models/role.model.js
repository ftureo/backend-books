import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
    }
});

export default mongoose.model("Role", roleSchema);