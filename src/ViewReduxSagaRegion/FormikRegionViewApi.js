import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { GetRegionRequest,DelRegionRequest } from '../redux-saga/Action/RegionAction'
import FormikAddRegionApi from './FormikAddRegionApi'
import FormikEditRegionApi from './FormikEditRegionApi'

export default function FormikRegionViewApi() {
  const dispatch = useDispatch()
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()
  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const {regions} = useSelector(state=>state.regionStated)
  useEffect(() => {
    dispatch(GetRegionRequest())
  }, [])

  const onDelete = async (id) => {
    dispatch(DelRegionRequest(id))
  }
  const onClick = (id) => {
    setDisplayEdit(true)
    setId(id)
  }
  return (
    <div>
      {
        displayEdit ?
          <FormikEditRegionApi
            id={id}
            setDisplay={setDisplayEdit}
            closeAdd={() => setDisplayEdit(false)}
            onRefresh={() => setRefresh(true)}
          />
          :
          display ?
            <FormikAddRegionApi
            setDisplay={setDisplay}
            closeAdd={() => setDisplay(false)}
            onRefresh={() => setRefresh(true)}
            />
            :
            <>
              <h2>List Region</h2>
              <button onClick={() => setDisplay(true)}>Add Region</button>
              <table>
                <th>Region ID</th>
                <th>Region Name</th>
                <th>Region File</th>
                <th>Region Foto</th>
                <th>Action</th>
                <tbody>
                  {
                    regions && regions.map(reg => (
                      <tr key={reg.region_id}>
                        <td>{reg.regionId}</td>
                        <td>{reg.regionName}</td>
                        <td>{reg.regionFile}</td>
                        <td>{reg.regionPhoto}</td>
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
