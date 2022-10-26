import { decSal, incSal } from "../Action/emp_action";
import { GET_EMP, ADD_EMP, INC_SAL, DEC_SAL } from "../Constant/emp_constant";

const listOfEmployee = [
    { empId: 1, fullname: 'Naufal', salary: 4500 },
    { empId: 2, fullname: 'Firdaus', salary: 5500 },
    { empId: 3, fullname: 'Ahmad', salary: 3500 }
]

const INIT_STATE = {
    employee: [...listOfEmployee],
    totalSalary : listOfEmployee.reduce((sum,el)=> sum + el.salary,0)
}

const empReducer = (state = INIT_STATE, action) =>{
    switch (action.type) {
        case GET_EMP:
            return {...state}
        case ADD_EMP:
            return applyAddEmp(state,action)
        case INC_SAL:
            return incSalary(state,action)
        case DEC_SAL:
            return decSalary(state,action)
        default:
            return state            
    }

}

const applyAddEmp = (state,action) => {
    const {payload} = action
    return {
        ...state,
        employee:[...state.employee,payload],
        totalSalary: state.employee.reduce((sum,el)=> sum + el.salary,0)

    }
}
const incSalary = (state, action) => {
    const {payload} = action
    state.employee = state.employee.map(emp => {
      if (emp.empId !== payload.id) return emp
      emp.salary += 500
      return emp
    })
    return {...state};
  }
  
  const decSalary = (state, action) => {
    const {payload} = action
    state.employee = state.employee.map(emp => {
      if (emp.empId !== payload.id) return emp
      emp.salary -= 500
      return emp
    })
    return {...state};
  }


export default empReducer