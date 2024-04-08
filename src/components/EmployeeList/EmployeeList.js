import { EmployeeItem } from "../EmployeeItem/EmployeeItem";

import './employeeList.css';

export const EmployeeList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeeItem/>
      <EmployeeItem/>
      <EmployeeItem/>
    </ul>
  )
}