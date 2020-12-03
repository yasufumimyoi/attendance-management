import { useEffect } from "react";
//import { Employees } from "./Employees";
import { EmployeesAddForm } from "./EmployeesAddForm";
import { Schedules } from "./Schedules";

const App = () => {
  //認証する
  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      <Schedules />
      <EmployeesAddForm />
    </div>
  );
};

export { App };
