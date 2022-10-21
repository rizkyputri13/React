import React, { useState, useEffect } from 'react'
import RegionApi from '../api/RegionApi'

export default function FormEditRegionApi(props) {
    const [region, setRegion] = useState([])
    const [values, setValues] = useState({
        regionId: undefined,
        regionName: undefined
      })
      
    useEffect(() => {
        RegionApi.FindOne(props.id).then(data => {
            setRegion(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    const onEdit = async () => {
        const payload = {
            regionId: (props.id),
            regionName: (values.regionName)
        }
        await RegionApi.Update(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Updated')
            })
    }
    return (
        <div>
            <h2>Edit Region</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Region ID : </label>
                    <input type="text" defaultValue={region.regionId} onChange={HandleChange('regionId')} disabled></input>
                </div>
                <div>
                    <label>Region Name : </label>
                    <input type="text" defaultValue={region.regionName} onChange={HandleChange('regionName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
