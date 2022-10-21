import React, { useState } from 'react'
import EmployeeApi from '../api/EmployeeApi'

export default function FormEmployeeApi(props) {
    const [values, setValues] = useState({
        employeeName: undefined
    })

    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            employeeName: (values.employeeName)
        }
        await EmployeeApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Employee Name : </label>
                    <input type="text" placeholder='Employee Name' onChange={HandleChange('employeeName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

