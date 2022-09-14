import {combineReducers} from 'redux'
import authReducer from './authReducer'
import alertReducer from './alertReducer'
import commissionReducer from './commissionReducer'

const rootReducer=combineReducers({
    authReducer,alertReducer,commissionReducer
})
export default rootReducer