import express from "express";
import { createEmployee, deleteEmployee, getAllEmployees, updateEmployee ,findEmployeeByName} from "../controllers/employee.curd.js";
const router=express.Router();

router.post("/create-employee",createEmployee);
router.get("/get-all-employees",getAllEmployees);
router.put('/edit-employee/:id',updateEmployee);
router.delete('/delete-employee/:id',deleteEmployee);
router.get('/get-employee-by-name',findEmployeeByName);


export {router as employeeRoutes};
