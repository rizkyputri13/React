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
                    <label>First Name : </label>
                    <input type="text" placeholder='First Name' onChange={HandleChange('firstName')}></input>
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" placeholder='Last Name' onChange={HandleChange('lastName')}></input>
                </div>
                <div>
                    <label> Email : </label>
                    <input type="text" placeholder='Email' onChange={HandleChange('email')}></input>
                </div>
                <div>
                    <label>Phone Number : </label>
                    <input type="text" placeholder='Phone Number' onChange={HandleChange('phoneNumber')}></input>
                </div>
                <div>
                    <label>Hire Date : </label>
                    <input type="text" placeholder='Hire Date' onChange={HandleChange('hireDate')}></input>
                </div>
                <div>
                    <label>Salary : </label>
                    <input type="text" placeholder='Salary' onChange={HandleChange('salary')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

