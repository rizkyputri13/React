import * as ActionType from '../Constant/emp_constant'

export const doGetEmp = (payload) => ({
    type: ActionType.GET_EMP,
    payload
})

export const doAddEmp = (payload) => ({
    type: ActionType.ADD_EMP,
    payload
})