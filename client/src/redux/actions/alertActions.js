import { uuid4 } from 'uuid4';
import { REMOVEALERT, SETALERT } from "../types/alertTypes" 
export const setAlert=(msg,alertType)=>(dispatch )=>{
    const id=uuid4()
    dispatch({
        type:SETALERT,
        payload:{
            id,msg,alertType
        }
    })
    setTimeout(() => {
        dispatch({
            type:REMOVEALERT,
            payload:id
        })
    }, 3000);
}