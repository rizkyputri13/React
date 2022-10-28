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
                    <button class="mx-auto h-12 w-30 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    type='submit'>Save</button>
                    <button class="mx-auto h-12 w-30 items-center justify-center rounded-md border border-transparent bg-grey-900 px-4 py-2 text-base font-medium text-indigo shadow-sm hover:bg-indigo-700"
                     onClick={() => props.setDisplay(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
