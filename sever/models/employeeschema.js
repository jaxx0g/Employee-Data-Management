
import moongose from "mongoose";
const employeeschema=new moongose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    position:{
        type:String,
        required:true
        
    }
},{timestamps :true});
const Employee=moongose.model("Employee",employeeschema);
export default Employee;