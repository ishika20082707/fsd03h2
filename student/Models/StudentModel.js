import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    Rollno:{
        type: Number
    },
    Name: {
        type: String
    },
    Subject:{
        type: String
    },
    Marks: {
        type: Number
    }
},{timestamps: true})

export const Student = mongoose.model('Student', studentSchema);