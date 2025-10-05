import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
   const initialState={
        employeedata:[],
        isloading:false
    };
   
export const fetchemployeedata=createAsyncThunk('employees/get-all-employees',
async()=>{

    const response=await axios.get('http://localhost:3000/api/v1/employees/get-all-employees');

    return response?.data;
})
export const addemployeedata=createAsyncThunk('employees/create-employee',
    async(formdata)=>{
         const response=await axios.post('http://localhost:3000/api/v1/employees/create-employee', formdata,{
            headers:{
                "Content-Type":"application/json" }
    })
    return response?.data;
    })

    export const editemployeedata=createAsyncThunk('employees/edit-employee',
        async({id,formdata})=>{
            const response=await axios.put(`http://localhost:3000/api/v1/employees/edit-employee/${id}`, formdata,{
                headers:{
                    "Content-Type":"application/json" }
        })
        return response?.data;
        })

        export const deleteemployeedata=createAsyncThunk('employees/delete-employee',
            async(id)=>{
                const response=await axios.delete(`http://localhost:3000/api/v1/employees/delete-employee/${id}`);
                return response?.data;
            })
     export const fetchemployeebyname=createAsyncThunk('employees/get-employee-by-name',
        async({name})=>{
            const response=await axios.get(`http://localhost:3000/api/v1/employees/get-employee-by-name?name=${name}`);
            return response?.data;
        }
     )

const employeeslice=createSlice({
    name:"employees",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder.addCase(fetchemployeedata.pending,(state)=>{
        state.isloading=true;   
    })
    .addCase(fetchemployeedata.fulfilled,(state,action)=>{
        state.isloading=false;
        state.employeedata=action.payload.employees;
        console.log(action.payload);
        console.log(action.payload.employees);
        
    })
    .addCase(fetchemployeedata.rejected,(state,action)=>{
        state.isloading=false;
        state.employeedata=[];
        console.log(action.error.message);
    })
    .addCase(fetchemployeebyname.pending,(state)=>{
        state.isloading=true;
    })
    .addCase(fetchemployeebyname.fulfilled,(state,action)=>{
        state.isloading=false;
        state.employeedata=action.payload.employees;
    })
    .addCase(fetchemployeebyname.rejected,(state,action)=>{
        state.isloading=false;
        state.employeedata=[];
        console.log(action.error.message);
    })
}
}) 
export default employeeslice.reducer;