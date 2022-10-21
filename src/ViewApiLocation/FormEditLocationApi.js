import React, { useState, useEffect } from 'react'
import LocationApi from '../api/LocationApi'

export default function FormEditLocationApi(props) {
    const [location, setLocation] = useState([])
    const [values, setValues] = useState({
        locationId: undefined,
        streetAddress: undefined,
        postalCode: undefined,
        city: undefined,
        stateProvince: undefined
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
            streetAddress: (values.streetAddress),
            postalCode: (values.postalCode),
            city: (values.city),
            stateProvince: (values.stateProvince)
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
                    <label>Street Address : </label>
                    <input type="text" defaultValue={location.streetAddress} onChange={HandleChange('streetAddress')}></input>
                </div>
                <div>
                    <label>Postal Code : </label>
                    <input type="text" defaultValue={location.postalCode} onChange={HandleChange('postalCode')}></input>
                </div>
                <div>
                    <label>City : </label>
                    <input type="text" defaultValue={location.city} onChange={HandleChange('city')}></input>
                </div>
                <div>
                    <label>State Province: </label>
                    <input type="text" defaultValue={location.stateProvince} onChange={HandleChange('stateProvince')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
