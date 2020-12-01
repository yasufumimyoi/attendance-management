import React, { useState } from "react";

const AttendanceSearchForm = () => {
  const [overTime, setOverTime] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/schedule");
      const jsonData = await response.json();
      let totalOverTime = 0;
      jsonData.map((data) => {
        const formatYear = data.work_day.substring();
        const formatMonth = data.work_day.substring();
        const formatDate = data.work_day.substring();
        const formatStartHour = data.work_start.substring(1, 2);
        const formatEndHour = data.work_end.substring(0, 2);
        const start = new Date(2020, 11, 23, formatStartHour);
        const end = new Date(2020, 11, 23, formatEndHour);
        let workingHour = (end - start) / 1000 / 60 / 60;
        if (workingHour > 8) {
          const overTime = workingHour - 8;
          totalOverTime = totalOverTime + overTime;
          workingHour = 0;
        }
        workingHour = 0;
        console.log("total", totalOverTime);
        setOverTime(totalOverTime);
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Check your working hours</p>
        <input type="text" />
        <button>Search</button>
        <p>Total overwork time: {overTime} hours</p>
      </form>
    </div>
  );
};

export { AttendanceSearchForm };
