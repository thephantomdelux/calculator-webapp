import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const conncectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database is connected successfully");
    } catch (error) {
        console.error("Database connection failed", error.message);
        process.exit(1);
    }
}

export default conncectDB;