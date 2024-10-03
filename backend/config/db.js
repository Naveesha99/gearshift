import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Naveesha:1234@cluster0.2y9ga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('MongoDB Connected'));
}

export default connectDB;
