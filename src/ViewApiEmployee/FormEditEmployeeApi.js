import React, { useState, useEffect } from 'react'
import EmployeeApi from '../api/EmployeeApi'

export default function FormEditEmployeeApi(props) {
    const [employee, setEmployee] = useState([])
    const [values, setValues] = useState({
        employeeId: undefined,
        employeeName: undefined
      })
      
    useEffect(() => {
        EmployeeApi.FindOne(props.id).then(data => {
            setEmployee(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    const onEdit = async () => {
        const payload = {
            employeeId: (props.id),
            employeeName: (values.employeeName)
        }
        await EmployeeApi.Update(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Updated')
            })
    }
    return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Employee ID : </label>
                    <input type="text" defaultValue={employee.employeeId} onChange={HandleChange('employeeId')} disabled></input>
                </div>
                <div>
                    <label>Employee Name : </label>
                    <input type="text" defaultValue={employee.employeeName} onChange={HandleChange('employeeName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
