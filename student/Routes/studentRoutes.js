import express from 'express';
import { Student } from '../Models/StudentModel.js';

const studentRoutes = express.Router();

studentRoutes.post('/addStudent', async (req,res)=> {
    let newStudent = new Student(req.body)
    await newStudent.save()

    res.send('Student added succesfully')
})

studentRoutes.get('/getAll', async (req,res)=> {
    let studentData = await Student.find();
    res.send(studentData);
})

studentRoutes.delete('/remove/:roll',async (req,res)=>{
    let roll = req.params.roll;

    let data = await Student.findOne({Rollno: roll})
    if(data){
        await Student.findOneAndDelete({Rollno: roll})
        res.send('deleted succesfully')
    }
    else{
        res.send('unable to remove')
    }
})

studentRoutes.get('/search/:roll',async (req,res)=>{
    let roll = req.params.roll;

    let data= await Student.findOne({Rollno: roll})
    // console.log(data)
    res.send(data)
})

studentRoutes.put('/updatemarks/:roll',async (req,res)=>{
    let roll = req.params.roll;
    let marks = req.body.marks;
    
    let data= await Student.findOneAndUpdate({Rollno: roll},{Marks:marks})
    if(data)
    res.send('updated succesfully')
    else
    res.send('cannot update')
})
export default studentRoutes;