import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../types/authTypes"
import axios from 'axios'
import { setAlert } from "./alertActions"

// sign up particular
export const registerParticular=(data,Photo,PhotoPassport,navigate)=>async(dispatch)=>{
    const info =new FormData()
    info.append('name',data.name)
    info.append('phone',data.phone)
    info.append('birth',data.birth)
    info.append('photo',Photo)
    info.append('passport',data.passport)
    info.append('passportPhoto',PhotoPassport)
    info.append('email',data.email)
    info.append('password',data.password)
    try {
        const res=await axios.post ('/api/auth/signupParticular', info)
        dispatch({
            type:REGISTER,
            payload:res.data
        })
        navigate('/profile')
    } catch (error) {
        error.response.data.errors.forEach(err=>dispatch(setAlert(err.msg,"danger")))
        dispatch({
            type:FAIL
        })
    }
}
// sign up professional
export const registerProfessional=(data,Photo,PatentPhoto,commercialRegisterPhoto,navigate)=>async(dispatch)=>{
    const info =new FormData()
    info.append('name',data.name)
    info.append('phone',data.phone)
    info.append('birth',data.birth)
    info.append('photo',Photo)
    info.append('patentPhoto',PatentPhoto)
    info.append('commercialRegister', commercialRegisterPhoto)
    info.append('email',data.email)
    info.append('password',data.password)
    try {
        const res=await axios.post ('/api/auth/signupProfessional', info)
        dispatch({
            type:REGISTER,
            payload:res.data
        })
        navigate('/profile')
    } catch (error) {
        error.response.data.errors.forEach(err=>dispatch(setAlert(err.msg,"danger")))
        dispatch({
            type:FAIL
        })
    }
}
//sign in
export const login=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post ('/api/auth/signin', data)
        console.log(res)
        dispatch({
            type:LOGIN,
            payload:res.data
        })
        navigate('/profile')
    } catch (error) {
        error.response.data.errors.forEach(err=>dispatch(setAlert(err.msg,"danger")))
        dispatch({
            type:FAIL
        })
    }
}
// get current
export const getCurrentUser=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get('/api/auth/current', config)
        dispatch({
            type:CURRENT,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:FAIL
        })
    }
}
// logout
export const logout=()=>{
    return {
        type:LOGOUT
    }
}