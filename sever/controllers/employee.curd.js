
import Employee from "../models/employeeschema.js";
const createEmployee=async(req,res)=>{
    try{
        const {name,email,position}=req.body;
         const findEmployee=await Employee.findOne({"email":email});
         if(findEmployee){
            return res.status(400).json({message:"Employee already exists"});
         }
            const newEmployee=new Employee({name,email,position});
            await newEmployee.save();
            console.log(newEmployee);
            return res.status(201).json({newEmployee,message:"Employee created successfully"});
    }catch(err){
        return res.status(500).json({message:"Internal server error"}); 
    }
}
  

const getAllEmployees=async(req,res)=>{
    try{
       const employees=await Employee.find({});
       if(!employees){
        return res.status(404).json({message:"No employees found"});
       }
       return res.status(200).json({employees,message:"Employees fetched successfully"});
    }catch(err){
       return res.status(500).json({message:"Internal server error"});  
    }
}
const updateEmployee=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,email,position}=req.body;
        const findEmployee=await Employee.findById(id);
        if(!findEmployee){
            return res.status(404).json({message:"Employee not found"});
        }
        findEmployee.name=name || findEmployee.name;
        findEmployee.email=email || findEmployee.email;
        findEmployee.position=position || findEmployee.position;
        await findEmployee.save();
        return res.status(200).json({message:"Employee updated successfully",data:findEmployee});     
        }catch(err){    
            return res.status(500).json({message:"Internal server error"});
        }
}
const deleteEmployee=async(req,res)=>{
    try{
       
        const findEmployee=await  Employee.findByIdAndDelete(req.params.id);
       if(!findEmployee){
     return res.status(404).json({message:"Employee not found"});
        
       }
      
       return res.status(200).json({message:"Employee deleted successfully"});
    }catch(err){
        return res.status(500).json({message:"Internal server error"});
    }
}
const findEmployeeByName=async(req,res)=>{
     try{
         const{name}=req.query
            const employees=await Employee.find({name:new RegExp(name,'i')});
            if(!employees){
                return res.status(404).json({message:"No employees found"});
            }return res.status(200).json({employees,message:"Employees fetched successfully"})  
;     }catch(err){
        return res.status(500).json({message:"Internal server error"});
     }
}


export{createEmployee,getAllEmployees,updateEmployee,deleteEmployee,findEmployeeByName};