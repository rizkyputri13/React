import React, { useState } from 'react'

export default function EmployeeList() {
    const listEmployee = [
        { empId: 1, fullname: 'Naufal', salary: 4500 },
        { empId: 2, fullname: 'Firdaus', salary: 5500 },
        { empId: 3, fullname: 'Ahmad', salary: 3500 }
    ]
    const [ employee, setEmployee ] = useState(listEmployee)

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
    return (
        <div>
            <h2>List Employee</h2>
            <ul>
                {
                    (employee || []).map(emp => {
                        return (
                            <li key={emp.empId}>
                                <p>Emp Id : {emp.empId}</p>
                                <p>Full Name : {emp.fullname}</p>
                                <p>Salary : {emp.salary}</p>
                                <button onClick={() => PenambahanGaji(emp.empId)}> Penambahan Gaji </button>
                                <button onClick={() => PenguranganGaji(emp.empId)}> Pengurangan Gaji</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
