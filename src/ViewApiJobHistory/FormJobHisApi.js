import React, { useState } from 'react'
import JobHistoryApi from '../api/JobHistoryApi'

export default function FormJobHisApi(props) {
    const [values, setValues] = useState({
        startDate: undefined,
        endDate: undefined
    })

    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            startDate: (values.startDate),
            streetAddress: (values.streetAddress),
            postalCode: (values.postalCode),
            city: (values.city),
            stateProvince: (values.stateProvince)
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
                    <input type="text" placeholder='Start Date' onChange={HandleChange('startDate')}></input>
                </div>
                <div>
                    <label>End Date : </label>
                    <input type="text" placeholder='End Date' onChange={HandleChange('endDate')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

