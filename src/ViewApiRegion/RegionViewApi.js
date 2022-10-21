import React, { useState, useEffect } from 'react'
import RegionApi from '../api/RegionApi'
import FormEditRegionApi from './FormEditRegionApi'
import FormRegionApi from './FormRegionApi'

export default function RegionViewApi() {
  const [region, setRegion] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()

  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)

  useEffect(() => {
    RegionApi.list().then(data => {
      setRegion(data)
    })
    setRefresh(false)
  }, [refresh])

  const onDelete = async (id) => {
    RegionApi.Delete(id).then(() => {
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
          <FormEditRegionApi
            id={id}
            setRefresh={setRefresh}
          />
          :
          display ?
            <FormRegionApi
              setRefresh={setRefresh}
            />
            :
            <>
              <h2>List Region</h2>
              <button onClick={() => setDisplay(true)}>Add Region</button>
              <table>
                <thead>
                  <tr>
                    <th>Region ID</th>
                    <th>Region Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    region.map && region.map(reg => (
                      <tr key={reg.region_id}>
                        <td>{reg.regionId}</td>
                        <td>{reg.regionName}</td>
                        <td>
                          <button onClick={() => onDelete(reg.regionId)}>Delete Region</button>
                          <button onClick={() => onClick(reg.regionId)}>Edit Region</button>
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

