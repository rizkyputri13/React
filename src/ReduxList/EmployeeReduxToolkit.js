import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import EmpForm from '../Form/FormInput'
import { doGetEmps, doAddEmps } from '../ReduxToolkit/EmpSlice'

export default function EmployeeReduxToolkit() {
    const dispatch = useDispatch()
    const emp = useSelector(state=>state.empStore.employee)
    const total = useSelector(state=> state.empStore.totalSalary)

    const [display, setDisplay] = useState(false)
    const [values,setValues] = useState({
        fullname: undefined,
        salary: 0
    })
    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const payload = {
            empId: (Math.round(Math.random() * 10)),
            fullname: values.fullname,
            salary: values.salary
        }
        dispatch(doAddEmps(payload))
        setDisplay(false)
    }
  return (
    <div>
            <h2>List Employee</h2>
            <button onClick={() => setDisplay(true)}>Add Employee</button>
            {
                display ?
                    <EmpForm
                        OnSubmitForm={onSubmit}
                        HandleOnChange={HandleChange}
                        setDisplay={setDisplay}
                    /> :
                    <>
                        <table>
                            <th>Employee ID</th>
                            <th>Full Name</th>
                            <th>Salary</th>
                            <th>Action</th>
                            <tbody>
                                {
                                    (emp || []).map(emp => {
                                        return (
                                            <tr key={emp.empId}>
                                                <td>Emp Id : {emp.empId}</td>
                                                <td>Full Name : {emp.fullname}</td>
                                                <td>Salary : {emp.salary}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table></>
            }
            <h3>Total Salary : {total}</h3>
        </div>

  )
}
