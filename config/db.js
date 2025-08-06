import mongoose from "mongoose";
import "dotenv/config";

async function connectToDB(){
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI environment variable is not defined.");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database");

}

export default connectToDB;