import React, { useState, useEffect } from 'react'
import DepartmentApi from '../api/DepartmentApi'

export default function FormEditDepartmentApi(props) {
    const [department, setDepartment] = useState([])
    const [values, setValues] = useState({
        departmentId: undefined,
        departmentName: undefined
      })
      
    useEffect(() => {
        DepartmentApi.FindOne(props.id).then(data => {
            setDepartment(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    const onEdit = async () => {
        const payload = {
            departmentId: (props.id),
            departmentName: (values.departmentName)
        }
        await DepartmentApi.Update(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Updated')
            })
    }
    return (
        <div>
            <h2>Edit Department</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Department ID : </label>
                    <input type="text" defaultValue={department.departmentId} onChange={HandleChange('departmentId')} disabled></input>
                </div>
                <div>
                    <label>Department Name : </label>
                    <input type="text" defaultValue={department.departmentName} onChange={HandleChange('departmentName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
