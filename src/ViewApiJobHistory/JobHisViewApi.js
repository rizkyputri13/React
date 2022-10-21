import React, { useState, useEffect } from 'react'
import JobHistoryApi from '../api/JobHistoryApi'
import FormEditJobHisApi from './FormEditJobHisApi'
import FormJobHisApi from './FormJobHisApi'

export default function JobHisViewApi() {
  const [job_history, setJobHis] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()

  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)

  useEffect(() => {
    JobHistoryApi.list().then(data => {
      setJobHis(data)
    })
    setRefresh(false)
  }, [refresh])

  const onDelete = async (id) => {
    JobHistoryApi.Delete(id).then(() => {
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
          <FormEditJobHisApi
            id={id}
            setRefresh={setRefresh}
          />
          :
          display ?
            <FormJobHisApi
              setRefresh={setRefresh}
            />
            :
            <>
              <h2>List JobHis</h2>
              <button onClick={() => setDisplay(true)}>Add JobHis</button>
              <table>
                <thead>
                  <tr>
                    <th>JobHis ID</th>
                    <th>JobHis Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    job_history && job_history.map(reg => (
                      <tr key={reg.job_history_id}>
                        <td>{reg.job_historyId}</td>
                        <td>{reg.job_historyName}</td>
                        <td>
                          <button onClick={() => onDelete(reg.job_historyId)}>Delete JobHis</button>
                          <button onClick={() => onClick(reg.job_historyId)}>Edit JobHis</button>
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

