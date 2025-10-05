import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchemployeedata,editemployeedata,deleteemployeedata,fetchemployeebyname } from '../store/createslice';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Editform from './Editform';
function Employeecard({ employeedata ,formdata}) {
 
  const navigate=useNavigate();
   const [formdataedit,setformdata]=useState({
    _id:0,
    name:"",
    email:"",
   position:""
   })
    const dispatch=useDispatch();
    const handledelete=(empId)=>{
       dispatch(deleteemployeedata(empId)).then(()=>{
        dispatch(fetchemployeedata());
       })
    }  
    const handleedit=(empid,name,email,position)=>{
             const formdataedit={_id:empid,name,email,position};
             setformdata(formdataedit);
             console.log(formdataedit);
              navigate('/edit',{state:formdataedit})
    }         
  return (
   <><span className='text-zinc-500 text-4xl mt-2'>Employee List</span>


   <div> <input className="border-2 border-gray-300 p-2 rounded-lg" type="text" placeholder='Search Employee' onChange={(e)=>{dispatch(fetchemployeebyname({name:e.target.value}))}}></input></div>    
   <ul className='grid grid-cols-3 gap-4 m-7 p-7 border-2'>
    { employeedata.length===0? <div className='text-red-500 text-2xl flex justify-center align-items-center'>No Employees Found</div>:
      employeedata.map(emp => (
        <li key={emp._id}  className='bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-lg text-white'>
            <div>
          <div className='text-yellow-300'>Name:{emp.name}   </div>
          <div className='text-black-300'>Email:{emp.email}   </div>
          <div className='text-yellow-300'>Position:{emp.position}   </div>
          <button className='bg-green-500 p-1 rounded-lg border-2' onClick={()=>{handleedit(emp._id,emp.name,emp.email,emp.position)}}>Edit</button>
          <button className='bg-red-500 p-1 rounded-lg ml-2 border-2' onClick={()=>{handledelete(emp._id)}}>Delete</button>
          </div>
       
        </li>
      ))}
    
    </ul>

    </>
  );
}
export default Employeecard;