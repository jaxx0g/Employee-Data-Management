import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB=async()=>{
   try{
    const response=await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected:${response.connection.host}`);
   }
   catch(err){
      console.error(`MongoDB connection error:${err.message}`);
   }
 }



export default connectDB;