import { pool } from "../database/database";
import { Response, Request } from "express";

//create employee
//他の項目も後で入れる
//bodyから複数の値を取れるのか確認する

export const addEmployee = async (req: Request, res: Response) => {
  try {
    const { name, age, birth } = req.body;
    const newEmployee = await pool.query(
      "insert into employee (name, age, birth) values($1, $2, $3) returning *",
      [name, age, birth]
    );
    res.json(newEmployee.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

//get all employee

export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const allEmployee = await pool.query("select * from employee");
    res.json(allEmployee.rows);
  } catch (error) {
    console.error(error.message);
  }
};

//get a employee
//employee_idでは値を取得できない
//URIが/:idだからparamsから取ってこれる変数名もidになる
//nameで取得できるようにする
//like

export const getEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await pool.query(
      "select * from employee where employee_id = $1",
      [id]
    );

    res.json(employee.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
};

//update a employee info
//全部の値を貰ってきて再度更新するのか？
//メソッド間違えるとnot foundになる

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age, birth } = req.body;
    const updateEmployee = await pool.query(
      "update employee set name = $1, age = $2, birth = $3 where employee_id = $4",
      [name, age, birth, id]
    );
    console.log(updateEmployee);
    res.json(updateEmployee);
  } catch (error) {
    console.error(error.message);
  }
};

//delete a employee

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteEmployee = await pool.query(
      "delete from employee where employee_id = $1",
      [id]
    );
    res.json("Deleted");
    console.log(deleteEmployee);
  } catch (error) {
    console.error(error.message);
  }
};
