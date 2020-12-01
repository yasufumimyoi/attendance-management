import { pool } from "../database/database";
import { Response, Request } from "express";

export const getOverTime = async (req: Request, res: Response) => {
  try {
    //const { id } = req.params;
    const employee = await pool.query(
      "select employee_id, work_day, work_start, work_end from schedule where work_day between '2020-11-01' and '2020-11-30'"
    );

    res.json(employee.rows);
  } catch (error) {
    console.error(error.message);
  }
};

//select work_start, work_end from schedule where work_day between '2020-11-01' and  '2020-11-30';
