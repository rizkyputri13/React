import React, { useState, useEffect } from 'react'
import DepartmentApi from '../api/DepartmentApi'
import FormEditDepartmentApi from './FormEditDepartmentApi'
import FormDepartmentApi from './FormDepartmentApi'

export default function DepartmentViewApi() {
  const [department, setDepartment] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()

  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)

  useEffect(() => {
    DepartmentApi.list().then(data => {
      setDepartment(data)
    })
    setRefresh(false)
  }, [refresh])

  const onDelete = async (id) => {
    DepartmentApi.Delete(id).then(() => {
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
          <FormEditDepartmentApi
            id={id}
            setRefresh={setRefresh}
          />
          :
          display ?
            <FormDepartmentApi
              setRefresh={setRefresh}
            />
            :
            <>
              <h2>List Department</h2>
              <button onClick={() => setDisplay(true)}>Add Department</button>
              <table>
                <thead>
                  <tr>
                    <th>Department ID</th>
                    <th>Department Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    department && department.map(reg => (
                      <tr key={reg.department_id}>
                        <td>{reg.departmentId}</td>
                        <td>{reg.departmentName}</td>
                        <td>
                          <button onClick={() => onDelete(reg.departmentId)}>Delete Department</button>
                          <button onClick={() => onClick(reg.departmentId)}>Edit Department</button>
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
