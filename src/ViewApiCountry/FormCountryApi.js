import React, { useState } from 'react'
import CountryApi from '../api/CountryApi'

export default function FormCountryApi(props) {
    const [values, setValues] = useState({
        countryName: undefined
    })
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = async () => {
        const payload = {
            countryName: (values.countryName)
        }
        await CountryApi.Create(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Insert')
            })
    }
    return (
        <div>
            <h2>Add Country</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Country Name : </label>
                    <input type="text" placeholder='Country Name' onChange={HandleChange('countryName')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
