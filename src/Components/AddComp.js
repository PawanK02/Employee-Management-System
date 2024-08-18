import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';
const AddComp = () => {
  const [firstname, setfn] = useState('');
  const [lastname, setln] = useState('');
  const [age, setage] = useState('');
  const [gender, setgender] = useState('');
  const [email, setemail] = useState('');
  const [job, setjob] = useState('');
  const [dept, setdept] = useState('');
  const [salary, setsal] = useState('');

  const history = useNavigate();
  const { id } = useParams();

  const saveEmp = (e) => {
    e.preventDefault();
    const employee = { firstname, lastname, age, gender, email, job, dept, salary }
    if (id) {
      EmployeeService.updateEmp(id, employee).then((response) => {
        history.push("/")
      }).catch(error => {
        console.log(error)
      })
    }
    else {
      console.log(employee)
      EmployeeService.createEmp(employee).then((response) => {
        console.log(response.data)
        history.push('/')
      }).catch(error => {
        console.log(error);
      })
    }
  }

  useEffect (() => {
    EmployeeService.getEmpById(id).then((response) =>{
      setfn(response.data.firstname)
      setln(response.data.lastname)
      setage(response.data.age)
      setgender(response.data.gender)
      setemail(response.data.email)
      setjob(response.data.job)
      setdept(response.data.dept)
      setsal(response.data.salary)
    }).catch(error => {
    console.log(error)
    })
    // eslint-disable-next-line
    },[])

  const title = () => {
    if (id) {
      return <h2 className="text-center">VIEW EMPLOYEE'S DETAILS</h2>
    } else {
      return <h2 className="text-center">ADD EMPLOYEES</h2>
    }
  }

  return (
    <div className="container">
      {
      title()
      }
      <form className="card-body">
        <div className="form-group mb2">
          <label className="form-label">First Name: </label><br />
          <input type="text" name="first_name" value={firstname} onChange={(e) => setfn(e.target.value)}></input>
        </div>

        <div className="form-group mb-2">
          <label className="form-label">Last Name: </label><br />
          <input type="text" name="last_name" value={lastname} onChange={(e) => setln(e.target.value)}></input>
        </div>

        <div className="form-group mb-2">
          <label className="form-label">Age:</label><br />
          <input type="number" name="age" value={age} onChange={(e) => setage(e.target.value)}></input>
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Email: </label><br />
          <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)}></input>
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Department:</label><br />
          <input type="text" name="dept" value={dept} onChange={(e) => setdept(e.target.value)}></input>
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Gender</label><br />
          <input type="text" name="gender" value={gender} onChange={(e) => setgender(e.target.value)}></input>
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Job: </label><br />
          <input type="text" name="job" value={job} onChange={(e) => setjob(e.target.value)}></input>
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Salary </label><br />
          <input type="number" name="salary" value={salary} onChange={(e) => setsal(e.target.value)}></input>
        </div>
      </form>
      <br />
      <button className="btn btn-success" onClick={(e) => saveEmp(e)}>UPDATE</button>
    </div>
  )
}

export default AddComp
