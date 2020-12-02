import e from "express";
import { useEffect, useState } from "react";
import { EmployeesDetails } from "./EmployeesDetails";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "aaa",
      age: 20,
    },
    {
      id: 2,
      name: "bbb",
      age: 25,
    },
    {
      id: 3,
      name: "ccc",
      age: 30,
    },
  ]);

  useEffect(() => {
    //データベースから従業員データをFetchしてくる
    console.log("First rendering");
  }, []);

  return (
    <div>
      <h3>従業員データ一覧</h3>
      {employees.map((employee) => (
        <EmployeesDetails key={employee.id} {...employee} />
      ))}
    </div>
  );
};

export { Employees };
