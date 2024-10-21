import mongoose from "mongoose";

const userScema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},{minimize: false});

const userModel = mongoose.model.user || mongoose.model('user', userScema);

export default userModel;