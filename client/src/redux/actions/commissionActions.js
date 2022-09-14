import { ADD_COMMISSION_ONE, ADD_TOTAL_COMMISSION, REMOVE_COMMISSION_ONE, REMOVE_TOTAL_COMMISSION, SET_COMMISSION, SET_TOTAL_COMMISSION, } from "../types/commissionTypes"



export const addCommission=()=>{
    return{
        type:ADD_COMMISSION_ONE
    }
}
export const removeCommission=()=>{
    return{
        type:REMOVE_COMMISSION_ONE
    }
}
export const setCommission=(commission)=>{
    return{
        type:SET_COMMISSION,
        payload:commission
    }
}
export const addTotalCommission=()=>{
    return{
        type:ADD_TOTAL_COMMISSION
    }
}
export const removeTotalCommission=()=>{
    return{
        type:REMOVE_TOTAL_COMMISSION
    }
}
export const setTotalCommission=(commission)=>{
    return{
        type:SET_TOTAL_COMMISSION,
        payload:commission
    }
}