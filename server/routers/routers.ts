import {
  addEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employee";

//import { getAllEmploySalary } from "../controllers/salary";

import { getOverTime } from "../controllers/attendance";

import { Router } from "express";

const router: Router = Router();

//Related to Employee table

router.post("/employee", addEmployee);

router.get("/employee", getAllEmployees);

router.get("/employee/:id", getEmployee);

router.put("/employee/:id", updateEmployee);

router.delete("/employee/:id", deleteEmployee);

//Related to Salary table

//router.get("/salary", getAllEmploySalary);

//Related to Schedule table

router.get("/schedule", getOverTime);

export default router;
