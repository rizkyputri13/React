import React, { useState } from 'react'
import LocationApi from '../api/LocationApi'

export default function FormLocationApi(props) {
    const [values, setValues] = useState({
        locationName: undefined
    })

    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            locationName: (values.locationName)
        }
        await LocationApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    return (
        <div>
            <h2>Add Location</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Location Name : </label>
                    <input type="text" placeholder='Location Name' onChange={HandleChange('locationName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

