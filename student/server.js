import express from "express";
import { connectDB } from './DB/connectDB.js';
import studentRoutes from "./Routes/studentRoutes.js";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(studentRoutes)


connectDB();

app.listen(2000, ()=>{
    console.log('server is running on port 3000')
})