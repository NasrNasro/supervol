import { ADD_COMMISSION_ONE, ADD_TOTAL_COMMISSION, REMOVE_COMMISSION_ONE, REMOVE_TOTAL_COMMISSION, SET_COMMISSION, SET_TOTAL_COMMISSION } from "../types/commissionTypes"


const initialState = {
    commission:0,
    totalCommission:0,
}

const commissionReducer=(state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COMMISSION_ONE:
            return {...state, commission:parseFloat(state.commission)+1}
        case REMOVE_COMMISSION_ONE:
            return {...state,  commission: (state.commission > 0) ? state.commission-1 : 0 }
        case SET_COMMISSION:
            return {...state, commission: (payload === "") ? 0 : payload}
        case ADD_TOTAL_COMMISSION:
            return {...state, totalCommission:state.commission*1.2 }
        case REMOVE_TOTAL_COMMISSION:
            return {...state, totalCommission: state.commission*1.2}
        case SET_TOTAL_COMMISSION:
            return {...state, totalCommission: state.commission*1.2}
      default:
          return state
    }
  }
  export default commissionReducer