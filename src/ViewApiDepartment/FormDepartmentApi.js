import React, { useState } from 'react'
import DepartmentApi from '../api/DepartmentApi'

export default function FormDepartmentApi(props) {
    const [values, setValues] = useState({
        departmentName: undefined
    })

    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            departmentName: (values.departmentName)
        }
        await DepartmentApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    return (
        <div>
            <h2>Add Department</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Department Name : </label>
                    <input type="text" placeholder='Department Name' onChange={HandleChange('departmentName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

