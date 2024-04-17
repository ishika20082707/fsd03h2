import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/Student')
        console.log('database connected successfully')
    }catch(err){
        console.log('error occured in connecting to database', err)
    }
}