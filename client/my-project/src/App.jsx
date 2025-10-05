import { useState } from 'react'
import React from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import { fetchemployeedata,addemployeedata } from './store/createslice.js'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import './App.css'
import Employeecard from './component/Employeecard.jsx'
import Editform from './component/Editform.jsx'
function App() {
  const [isdisable,setisdisable]=useState(false);
    const [formdata,setformdata]=useState([{
    name:"",
    email:"",
      position :""
  }]
  )
  const dispatch = useDispatch();
  const {employeedata} = useSelector(state => state.employees);
 useEffect(()=>{
  dispatch(fetchemployeedata());
  },[dispatch])
  const handledit=(formdata)=>{
  const email1=formdata.email.trim();

  if(!formdata.name || !formdata.email || !formdata.position){
    alert("Please fill all the fields");
    return;
  
  }if(!email1.substring(email1.length-10).includes("@gmail.com") ||email1.includes(" ") || email1.substring(0,email1.length-10).includes('@')) {
    alert("Please enter a valid email with @gmail.com and end with @gmail.com");
    return;
  }if (/[0-9@#$%^&*()_+!~`]/.test(formdata.name)) {
  alert("Name should not contain numbers or special characters");
  return;
}if(/[0-9@#$%^&*()_+!~`]/.test(formdata.position)){
  alert("Position should not contain numbers or special characters");
  return;
}
  console.log(formdata);
  dispatch(addemployeedata(formdata)).then(()=>{
  dispatch(fetchemployeedata()); 
  setformdata({name:"",email:"",position:""});
       })
}
 console.log(dispatch);
  return (
    <><div className='App'>
   <div className='bg-gradient-to-r from-green-400 to-blue-500 h-25 flex lg-rounded-lg justify-around'>
      <div className='text-white border-2 w-25' >Data Management</div>
      <div className='text-white border-2 w-2xl'>
        <div> Employee Data Manageent </div>
      </div>
      <div className='text-white'>Employee Data Management</div>
   </div>
   <div className='bg-gradient-to-r from-blue-500 to-purple-500 h-40 mt-7  '>
   <input className='m-7 bg-amber-100 p-2 rounded-lg border-2' type="text" placeholder='Enter Name' value={formdata.name} onChange={(e)=>setformdata({...formdata,name:e.target.value})} />
   <input className='m-7 bg-amber-100 p-2 rounded-lg border-2' type="email" placeholder='Enter Email' value={formdata.email} onChange={(e)=>setformdata({...formdata,email:e.target.value})} />
   <input className='m-7 bg-amber-100 p-2 rounded-lg border-2' type="text" placeholder='Enter Position' value={formdata.position} onChange={(e)=>setformdata({...formdata,position:e.target.value})} />
   <button className='bg-green-500 p-2 rounded-lg text-white mt-7 border-2' onClick={()=>{handledit(formdata)}} is>Submit</button>
    </div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employeecard employeedata={employeedata} formdata={formdata}/>} />
           <Route path="/edit" element={<Editform />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
    </>
  )
}

export default App
