import React, { useState, useEffect } from 'react'
import JobHistoryApi from '../api/JobHistoryApi'

export default function FormEditJobHisApi(props) {
    const [employee, setJobHis] = useState([])
    const [values, setValues] = useState({
        employeeId: undefined,
        startDate: undefined,
        endDate: undefined
      })
      
    useEffect(() => {
        JobHistoryApi.FindOne(props.id).then(data => {
            setJobHis(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    const onEdit = async () => {
        const payload = {
            employeeId: (props.id),
           startDate: (values.startDate),
           endDate: (values.endDate)
        }
        await JobHistoryApi.Update(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Updated')
            })
    }
    return (
        <div>
            <h2>Edit JobHis</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Employee ID : </label>
                    <input type="text" defaultValue={employee.employeeId} onChange={HandleChange('employeeId')} disabled></input>
                </div>
                <div>
                    <label>Start Date : </label>
                    <input type="text" defaultValue={employee.startDate} onChange={HandleChange('startDate')}></input>
                </div> 
                <div>
                    <label>End Date : </label>
                    <input type="text" defaultValue={employee.startDate} onChange={HandleChange('endDate')}></input>
                </div> 
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
