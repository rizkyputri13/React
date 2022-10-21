import React, { useState, useEffect } from 'react'
import EmployeeApi from '../api/EmployeeApi'
import FormEditEmployeeApi from './FormEditEmployeeApi'
import FormEmployeeApi from './FormEmployeeApi'

export default function EmployeeViewApi() {
  const [employee, setEmployee] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()

  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)

  useEffect(() => {
    EmployeeApi.list().then(data => {
      setEmployee(data)
    })
    setRefresh(false)
  }, [refresh])

  const onDelete = async (id) => {
    EmployeeApi.Delete(id).then(() => {
      setRefresh(true)
      window.alert('Data Successfully Delete')
    })
  }
  const onClick = (id) => {
    setDisplayEdit(true)
    setId(id)
  }
  return (
    <div>
      {
        displayEdit ?
          <FormEditEmployeeApi
            id={id}
            setRefresh={setRefresh}
          />
          :
          display ?
            <FormEmployeeApi
              setRefresh={setRefresh}
            />
            :
            <>
              <h2>List Employee</h2>
              <button onClick={() => setDisplay(true)}>Add Employee</button>
              <table>
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    employee && employee.map(reg => (
                      <tr key={reg.employee_id}>
                        <td>{reg.employeeId}</td>
                        <td>{reg.employeeName}</td>
                        <td>
                          <button onClick={() => onDelete(reg.employeeId)}>Delete Employee</button>
                          <button onClick={() => onClick(reg.employeeId)}>Edit Employee</button>
                        </td>
                      </tr>
                    ))                    
                  } 
                </tbody>
              </table>
            </>
      }
    </div>
  )
  
}

