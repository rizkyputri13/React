// import React, { useState, useEffect } from 'react'
// import RegionApi from '../api/RegionApi'
// import FormikAddRegionApi from './FormikAddRegionApi'
// import FormikEditRegionApi from './FormikEditRegionApi'

// export default function FormikRegionViewApi() {
//   const [region, setRegion] = useState([])
//   const [refresh, setRefresh] = useState(false)
//   const [id, setId] = useState()

//   const [display, setDisplay] = useState(false)
//   const [displayEdit, setDisplayEdit] = useState(false)

//   useEffect(() => {
//     RegionApi.list().then(data => {
//       setRegion(data)
//     })
//     setRefresh(false)
//   }, [refresh])

//   const onDelete = async (id) => {
//     RegionApi.Delete(id).then(() => {
//       setRefresh(true)
//       window.alert('Data Successfully Delete')
//     })
//   }
//   const onClick = (id) => {
//     setDisplayEdit(true)
//     setId(id)
//   }
//   return (
//     <div>
//       {
//         displayEdit ?
//           <FormikEditRegionApi
//             id={id}
//             setDisplay={setDisplayEdit}
//             closeAdd={() => setDisplayEdit(false)}
//             onRefresh={() => setRefresh(true)}
//           />
//           :
//           display ?
//             <FormikAddRegionApi
//             setDisplay={setDisplay}
//             closeAdd={() => setDisplay(false)}
//             onRefresh={() => setRefresh(true)}
//             />
//             :
//             <>
//               <h2>List Region</h2>
//               <button onClick={() => setDisplay(true)}>Add Region</button>
//               <table>
//                 <th>Region ID</th>
//                 <th>Region Name</th>
//                 <th>Action</th>
//                 <tbody>
//                   {
//                     region && region.map(reg => (
//                       <tr key={reg.region_id}>
//                         <td>{reg.regionId}</td>
//                         <td>{reg.regionName}</td>
//                         <td>
//                           <button onClick={() => onDelete(reg.regionId)}>Delete Region</button>
//                           <button onClick={() => onClick(reg.regionId)}>Edit Region</button>
//                         </td>
//                       </tr>
//                     ))
//                   }
//                 </tbody>
//               </table>
//             </>
//       }
//     </div>
//   )
// }
