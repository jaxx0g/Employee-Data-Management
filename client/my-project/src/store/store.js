
import {configureStore} from '@reduxjs/toolkit';
import employeesReducer from '../store/createslice.js'
const store=configureStore({
    reducer:{
       employees:employeesReducer,
    }
})

export default store;
