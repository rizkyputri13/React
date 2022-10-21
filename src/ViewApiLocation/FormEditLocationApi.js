import React, { useState, useEffect } from 'react'
import LocationApi from '../api/LocationApi'

export default function FormEditLocationApi(props) {
    const [location, setLocation] = useState([])
    const [values, setValues] = useState({
        locationId: undefined,
        locationName: undefined
      })
      
    useEffect(() => {
        LocationApi.FindOne(props.id).then(data => {
            setLocation(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    const onEdit = async () => {
        const payload = {
            locationId: (props.id),
            locationName: (values.locationName)
        }
        await LocationApi.Update(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Updated')
            })
    }
    return (
        <div>
            <h2>Edit Location</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Location ID : </label>
                    <input type="text" defaultValue={location.locationId} onChange={HandleChange('locationId')} disabled></input>
                </div>
                <div>
                    <label>Location Name : </label>
                    <input type="text" defaultValue={location.locationName} onChange={HandleChange('locationName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
