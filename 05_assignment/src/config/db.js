import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async() =>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected`);
    }catch(err){
        console.log(`Error: ${err.message}`);
    }
}

export default connectDB;