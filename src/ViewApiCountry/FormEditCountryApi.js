import React, { useState, useEffect } from 'react'
import CountryApi from '../api/CountryApi'

export default function FormEditCountryApi(props) {
    const [country, setCountry] = useState([])
    const [values, setValues] = useState({
        countryId: undefined,
        countryName: undefined
      })
    useEffect(() => {
        CountryApi.FindOne(props.id).then(data => {
            setCountry(data)
        })
    }, [])
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
      }
    const onEdit = async () => {
        const payload = {
            countryId: (props.id),
            countryName: (values.countryName)
        }
        await CountryApi.Update(payload)
            .then(() => {
                props.setRefresh(true)
                window.alert('Data Successfully Updated')
            })
    }
    return (
        <div>
            <h2>Edit Country</h2>
            <form onSubmit={onEdit}>
                <div>
                    <label>Country ID : </label>
                    <input type="text" defaultValue={country.countryId} onChange={HandleChange('countryId')} disabled></input>
                </div>
                <div>
                    <label>Country Name : </label>
                    <input type="text" defaultValue={country.countryName} onChange={HandleChange('countryName')}></input>
                </div>
                <div>
                    <button class="mx-auto h-12 w-30 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                     type='submit'>Save</button>
                    <button class="mx-auto h-12 w-30 items-center justify-center rounded-md border border-transparent bg-grey-900 px-4 py-2 text-base font-medium text-indigo shadow-sm hover:bg-indigo-700"
                     onClick={() => props.setDisplayEdit(false)}>Cancel</button>
                </div>

            </form>
        </div>
    )
}
