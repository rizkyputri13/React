import React, { useState, useEffect } from 'react'
import JobApi from '../api/JobApi'
import FormEditJobApi from './FormEditJobApi'
import FormJobApi from './FormJobApi'

export default function JobViewApi() {
  const [job, setJob] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [id, setId] = useState()

  const [display, setDisplay] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)

  useEffect(() => {
    JobApi.list().then(data => {
      setJob(data)
    })
    setRefresh(false)
  }, [refresh])

  const onDelete = async (id) => {
    JobApi.Delete(id).then(() => {
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
          <FormEditJobApi
            id={id}
            setRefresh={setRefresh}
          />
          :
          display ?
            <FormJobApi
              setRefresh={setRefresh}
            />
            :
            <>
              <h2>List Job</h2>
              <button onClick={() => setDisplay(true)}>Add Job</button>
              <table>
                <thead>
                  <tr>
                    <th>Job ID</th>
                    <th>Job Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    job && job.map(reg => (
                      <tr key={reg.job_id}>
                        <td>{reg.jobId}</td>
                        <td>{reg.jobName}</td>
                        <td>
                          <button onClick={() => onDelete(reg.jobId)}>Delete Job</button>
                          <button onClick={() => onClick(reg.jobId)}>Edit Job</button>
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

