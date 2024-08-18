import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';
const ListComp = () => {

  const [employees, setEmployees] = useState([]);

  const getAllEmp = () => {
    // eslint-disable-next-line
    EmployeeService.getAllEmployees().then((response) => {
      setEmployees(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    getAllEmp();
  }, [])
  const deleteEmp = (employeeid) => {
    EmployeeService.deleteEmp(employeeid).then((response) => {
      getAllEmp();
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="container">
      <div className="text-center"><h1>EMPLOYEE LIST</h1></div>
      <Link to="/details" className="btn btn-primary MB-32">ADD EMPLOYEES</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>EMPLOYEE_ID</th>
            <th>FIRSTNAME</th>
            <th>LASTNAME</th>
            <th>MANAGE</th>
          </tr>
        </thead>
        <tbody>{
          employees.map(
            employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstname}</td>
                <td>{employee.lastname}</td>
                <td>
                  <Link className='btn btn-info' to={`/details/${employee.id}`}>Details</Link>
                  <button className='btn btn-danger' onClick={() => deleteEmp(employee.id)} >Delete</button>
                </td>
              </tr>
          )
        }
        </tbody>
      </table>
    </div>
  )
}

export default ListComp
