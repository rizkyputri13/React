import React, { useState, useEffect } from 'react'
import LocationApi from '../api/LocationApi'
import FormEditLocationApi from './FormEditLocationApi'
import FormLocationApi from './FormLocationApi'

export default function LocationViewApi() {
  const [location, setLocation] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()

  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)

  useEffect(() => {
    LocationApi.list().then(data => {
      setLocation(data)
    })
    setRefresh(false)
  }, [refresh])

  const onDelete = async (id) => {
    LocationApi.Delete(id).then(() => {
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
          <FormEditLocationApi
            id={id}
            setRefresh={setRefresh}
          />
          :
          display ?
            <FormLocationApi
              setRefresh={setRefresh}
            />
            :
            <>
              <h2>List Location</h2>
              <button onClick={() => setDisplay(true)}>Add Location</button>
              <table>
                <thead>
                  <tr>
                    <th>Location ID</th>
                    <th>Location Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    location.map && location.map(loc => (
                      <tr key={loc.location_id}>
                        <td>{loc.locationId}</td>
                        <td>{loc.streetAddress}</td>
                        <td>{loc.postalCode}</td>
                        <td>{loc.city}</td>
                        <td>{loc.stateProvince}</td>
                        <td>
                          <button onClick={() => onDelete(loc.locationId)}>Delete Location</button>
                          <button onClick={() => onClick(loc.locationId)}>Edit Location</button>
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

