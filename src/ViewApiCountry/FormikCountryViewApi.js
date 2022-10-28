import React, { useState, useEffect } from 'react'
import CountryApi from '../api/CountryApi'
import FormikAddCountryApi from './FormikAddCountryApi'
import FormikEditCountryApi from './FormikEditCountryApi'
import Header from '../Component/Header'

export default function FormikCountryViewApi() {
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
              <Header name={'Country'} setDisplay={setDisplay}/>
              <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 table-auto ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">Country ID</th>
                    <th scope="col" className="px-6 py-3">Country Name</th>
                    <th scope="col" className="px-6 py-3">Country File</th>
                    <th scope="col" className="px-6 py-3">Country Foto</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="overscroll-auto md:overscroll-contain">
                  {
                    country && country.map(ctr => (
                      <tr key={ctr.country_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">{ctr.countryId}</td>
                        <td className="px-6 py-2">{ctr.countryName}</td>
                        <td className="px-6 py-2">{ctr.countryFile}</td>
                        <td className="px-6 py-2">{ctr.countryPhoto}</td>
                      
                        <td className='py-2'>
                            <button type="button"   
                            className="cursor-pointer inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                            onClick={() => onDelete(ctr.countryId)}>Delete Country</button>
                        
                          <button type="button" 
                          className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                          onClick={() => onClick(ctr.countryId)}>Edit Country</button>
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