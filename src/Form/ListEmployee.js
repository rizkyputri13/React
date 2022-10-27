import React, { useState, useEffect } from 'react'
import FormInput from './FormInput'

export default function ListEmployee() {
    const listEmployee = [
        { empId: 1, fullname: 'Naufal', salary: 4500 },
        { empId: 2, fullname: 'Firdaus', salary: 5500 },
        { empId: 3, fullname: 'Ahmad', salary: 3500 }
    ]
    const [employee, setEmployee] = useState(listEmployee)
    const [total, setTotal] = useState(0)
    const [values, setValues] = useState({
        fullname: undefined,
        salary: 0
    })
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        const TotalSalary = employee.reduce((sum, el) => sum + el.salary, 0)
        setTotal(TotalSalary)
    }, [employee])

    const HandleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        setEmployee([...employee, {
            empId: (Math.round(Math.random() * 10)),
            fullname: values.fullname,
            salary: values.salary
        }])
        setDisplay(false)
    }
    const PenambahanGaji = (id) => {
        setEmployee(
            [...employee.map(emp => {
                if (id === emp.empId) {
                    emp.salary = emp.salary + 500
                    return emp
                } else {
                    return emp
                }
            })]
        )
    }
    const PenguranganGaji = (id) => {
        setEmployee(
            [...employee.map(emp => {
                if (id === emp.empId) {
                    emp.salary = emp.salary - 500
                    return emp
                } else {
                    return emp
                }
            })]
        )
    }
    const renderForm = () => {
        return (
            <form onSubmit={onSubmit}>
                <div>
                    <label>Full Name : </label>
                    <input type="text" placeholder='Full Name' onChange={HandleChange('fullname')}></input>
                </div>
                <div>
                    <label>Salary : </label>
                    <input type="text" placeholder='salary' onChange={HandleChange('salary')}></input>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                    <button onClick={() => setDisplay(false)}>Cancel</button>
                </div>

            </form>
        )
    }
    return (
        <div>
            <h2>List Employee</h2>
            <button onClick={() => setDisplay(true)}>Add Employee</button>
            {
                display ?
                    <FormInput
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
                                    (employee || []).map(emp => {
                                        return (
                                            <tr key={emp.empId}>
                                                <td>Emp Id : {emp.empId}</td>
                                                <td>Full Name : {emp.fullname}</td>
                                                <td>Salary : {emp.salary}</td>
                                                <td>
                                                    <button onClick={() => PenambahanGaji(emp.empId)}> Penambahan Gaji </button>
                                                    <button onClick={() => PenguranganGaji(emp.empId)}> Pengurangan Gaji</button>
                                                </td>
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
