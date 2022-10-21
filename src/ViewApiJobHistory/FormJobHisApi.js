import React, { useState } from 'react'
import JobHistoryApi from '../api/JobHistoryApi'

export default function FormJobHisApi(props) {
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
        await JobHistoryApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    return (
        <div>
            <h2>Add JobHis</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Start Date : </label>
                    <input type="text" placeholder='Start Date' onChange={HandleChange('employeeName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

