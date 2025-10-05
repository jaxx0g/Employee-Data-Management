import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/dbconnect.js';
import {employeeRoutes} from './route/employeeroute.js';
dotenv.config(
    {
        path:'./.env'
    }
);

const app=express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));   

 import { Router } from 'express';
 app.use('/api/v1/employees',employeeRoutes);



 connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    }); 
}).catch((error)=>{
    console.log("Failed to connect to database",error);

})