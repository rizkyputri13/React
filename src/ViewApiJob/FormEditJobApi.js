import React, { useState, useEffect } from 'react'
import JobApi from '../api/JobApi'

export default function FormEditJobApi(props) {
    const [job, setJob] = useState([])
    const [values, setValues] = useState({
        jobId: undefined,
        jobTitle: undefined
      })
      
    useEffect(() => {
        JobApi.FindOne(props.id).then(data => {
            setJob(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    const onEdit = async () => {
        const payload = {
            jobId: (props.id),
            jobTitle: (values.jobTitle)
        }
        await JobApi.Update(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Updated')
            })
    }
    return (
        <div>
            <h2>Edit Job</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Job ID : </label>
                    <input type="text" defaultValue={job.jobId} onChange={HandleChange('jobId')} disabled></input>
                </div>
                <div>
                    <label>Job Title : </label>
                    <input type="text" defaultValue={job.jobTitle} onChange={HandleChange('jobTitle')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
