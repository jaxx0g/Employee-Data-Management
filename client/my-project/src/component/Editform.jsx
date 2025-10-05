import { useLocation } from 'react-router-dom';
import React, { useState } from 'react'
import { editemployeedata,fetchemployeedata } from '../store/createslice.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function Editform() {
  const location = useLocation();
  const navigate=useNavigate();
  const formdataedit = location.state;
  const dispatch = useDispatch();
const [formdata, setformdata] = useState({
  name: formdataedit?.name || "",
  email: formdataedit?.email || "",
  position: formdataedit?.position || ""
});
 


  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-500 h-40 mt-7  '>
      <h2>Edit Employee</h2>

      <p>Name: <input className="border-2 border-gray-300 p-2 rounded-lg" type="text"value={formdata.name} onChange={(e)=>{setformdata({...formdata,name:e.target.value})}} /></p>
      <p>Email: <input className="border-2 border-gray-300 p-2 rounded-lg" type="email"value={formdata.email} onChange={(e)=>{setformdata({...formdata,email:e.target.value})}} /></p>
      <p>Position: <input className="border-2 border-gray-300 p-2 rounded-lg" type="text"value={formdata.position} onChange={(e)=>{setformdata({...formdata,position:e.target.value})}} /></p>
       <button onClick={()=>{

        if(!formdata.name || !formdata.email || !formdata.position){
    alert("Please fill all the fields");
    return;}
    if(!formdata.email.trim().substring(formdata.email.trim().length-10).includes("@gmail.com") ||formdata.email.trim().includes(" ") || formdata.email.trim().substring(0,formdata.email.trim().length-10).includes('@')) {
    alert("Please enter a valid email with @gmail.com and end with @gmail.com");
    return;
  }if(/[0-9@#$%^&*()_+!~`]/.test(formdata.name)) {
  alert("Name should not contain numbers or special characters");
  return;
}if(/[0-9@#$%^&*()_+!~`]/.test(formdata.position)){
  alert("Position should not contain numbers or special characters");
  return;
}
        dispatch(editemployeedata({id:formdataedit._id,formdata})).then(()=>{
  dispatch(fetchemployeedata());
  alert("Employee data updated successfully");
       })}} className='btn btn-primary border-2 m-2'>Save</button>
       
        <button onClick={()=>navigate("/")}>Back</button>
  
      </div>
    );
}

export default Editform;