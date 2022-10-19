import React,{useState,useEffect} from 'react'
import RegionApi from '../api/RegionApi'

export default function RegionViewApi() {
  const [region, setRegion] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(()=>{
    RegionApi.list().then(data => {
      setRegion(data)
    })
    setRefresh(false)
  },[refresh])

  const onDelete = async(id) => {
    RegionApi.Delete(id).then(()=>{
      setRefresh(true)
      window.alert('Data Successfully Delete')
    })
  }
  return (
    <div>
      <h2>List Region</h2>
      {
        <>
        <table>
          <th>Region ID</th>
          <th>Region Name</th>
          <tbody>
            {
              region&&region.map(reg=>(
                <tr key={reg.region_id}>
                  <td>{reg.regionId}</td>
                  <td>{reg.regionName}</td>
                  <td>
                    <button onClick={()=>onDelete(reg.regionId)}>Delete Region</button>
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
