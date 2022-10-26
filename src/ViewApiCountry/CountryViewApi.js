import React, { useState, useEffect } from 'react'
import CountryApi from '../api/CountryApi'
import FormEditCountryApi from './FormEditCountryApi'
import FormCountryApi from './FormCountryApi'

export default function CountryViewApi() {
  const [country, setCountry] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()

  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)

  useEffect(() => {
    CountryApi.list().then(data => {
      setCountry(data)
    })
    setRefresh(false)
  }, [refresh])

  const onDelete = async (id) => {
    CountryApi.Delete(id).then(() => {
      setRefresh(true)
      window.alert('Data Successfully Delete')
    })
  }
  const onClick = (id) => {
    setDisplayEdit(true)
    setId(id)
  }
  return (
    <div>
      {
        displayEdit ?
          <FormEditCountryApi
            id={id}
            setRefresh={setRefresh}
            setDisplayEdit={setDisplayEdit}
          />
          :
          display ?
            <FormCountryApi
              setRefresh={setRefresh}
              setDisplay={setDisplay}
            />
            :
            <>
              <h2>List Country</h2>
              <button onClick={() => setDisplay(true)}>Add Country</button>
              <table>
                <thead>
                  <tr>
                    <th>Country ID</th>
                    <th>Country Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    country.map && country.map(ctr => (
                      <tr key={ctr.country_id}>
                        <td>{ctr.countryId}</td>
                        <td>{ctr.countryName}</td>
                        <td>
                          <button onClick={() => onDelete(ctr.countryId)}>Delete Country</button>
                          <button onClick={() => onClick(ctr.countryId)}>Edit Country</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </>
      }
    </div>
  )
}
