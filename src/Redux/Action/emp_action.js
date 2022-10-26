import * as ActionType from '../Constant/emp_constant'

export const doGetEmp = (payload) => ({
    type: ActionType.GET_EMP,
    payload
})

export const doAddEmp = (payload) => ({
    type: ActionType.ADD_EMP,
    payload
})

export const doIncSal = (payload) => ({
    type: ActionType.INC_SAL,
    payload
})
export const doDecSal = (payload) => ({
    type: ActionType.DEC_SAL,
    payload
})
