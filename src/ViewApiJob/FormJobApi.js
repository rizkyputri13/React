import React, { useState } from 'react'
import JobApi from '../api/JobApi'

export default function FormJobApi(props) {
    const [values, setValues] = useState({
        jobName: undefined
    })

    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            jobName: (values.jobName)
        }
        await JobApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    return (
        <div>
            <h2>Add Job</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Job Name : </label>
                    <input type="text" placeholder='Job Name' onChange={HandleChange('jobName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

