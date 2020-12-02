import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AttendanceAddForm = () => {
  const initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const handleChange = (date) => {
    setStartDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(startDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Pick your working date</p>
      <DatePicker selected={startDate} onChange={handleChange} showTimeSelect />
      <button type="submit">Submit</button>
    </form>
  );
};

export { AttendanceAddForm };

// <form>
// <select name="work_start">
//   <option value="9">9</option>
//   <option value="10">10</option>
//   <option value="10">11</option>
//   <option value="10">12</option>
//   <option value="10">13</option>
//   <option value="10">14</option>
//   <option value="10">15</option>
//   <option value="10">16</option>
//   <option value="10">17</option>
//   <option value="10">18</option>
//   <option value="10">19</option>
//   <option value="10">20</option>
//   <option value="10">21</option>
// </select>
// :
// <select name="work_end">
//   <option value="00">00</option>
//   <option value="15">15</option>
//   <option value="30">30</option>
//   <option value="30">45</option>
// </select>
// <button>Submit</button>
// </form>
