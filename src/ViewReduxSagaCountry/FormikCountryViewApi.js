import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetCountryRequest,DelCountryRequest } from '../redux-saga/Action/CountryAction'
import FormikAddCountryApi from './FormikAddCountryApi'
import FormikEditCountryApi from './FormikEditCountryApi'

export default function FormikCountryViewApi() {
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()
  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const {countries} = useSelector(state=>state.countryStated)
  useEffect(() => {
    dispatch(GetCountryRequest())
  }, [])

  const onDelete = async (id) => {
    dispatch(DelCountryRequest(id))
  }
  const onClick = (id) => {
    setDisplayEdit(true)
    setId(id)
  }
  return (
    <div>
      {
        displayEdit ?
          <FormikEditCountryApi
            id={id}
            setDisplay={setDisplayEdit}
            closeAdd={() => setDisplayEdit(false)}
            onRefresh={() => setRefresh(true)}
          />
          :
          display ?
            <FormikAddCountryApi
            setDisplay={setDisplay}
            closeAdd={() => setDisplay(false)}
            onRefresh={() => setRefresh(true)}
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
                    <th>Country File</th>
                    <th>Country Foto</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    countries && countries.map(ctr => (
                      <tr key={ctr.country_id}>
                        <td>{ctr.countryId}</td>
                        <td>{ctr.countryName}</td>
                        <td>{ctr.countryFile}</td>
                        <td>{ctr.countryPhoto}</td>
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
