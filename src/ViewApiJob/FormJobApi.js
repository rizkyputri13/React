import React, { useState } from 'react'
import JobApi from '../api/JobApi'

export default function FormJobApi(props) {
    const [values, setValues] = useState({
        jobTitle: undefined
    })

    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            jobTitle: (values.jobTitle)
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
                    <label>Job Title : </label>
                    <input type="text" placeholder='Job Title' onChange={HandleChange('jobTitle')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

