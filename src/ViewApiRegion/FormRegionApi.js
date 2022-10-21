import React, { useState } from 'react'
import RegionApi from '../api/RegionApi'

export default function FormRegionApi(props) {
    const [values, setValues] = useState({
        regionName: undefined
    })

    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            regionName: (values.regionName)
        }
        await RegionApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    return (
        <div>
            <h2>Add Region</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Region Name : </label>
                    <input type="text" placeholder='Region Name' onChange={HandleChange('regionName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
