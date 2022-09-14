import axios from "axios"
import { getCurrentUser } from "./authActions"

// update phone number particular
export const editPhoneParticular=(phone)=>async(dispatch)=>{
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updatePhoneParticular', {phone}, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update phone number", error})
    }
}
// update phone professional
export const editPhoneProfessional=(phone)=>async(dispatch)=>{
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updatePhoneProfessional', {phone}, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update phone number", error})
    }
}
// update email particular
export const editEmailParticular=(email)=>async(dispatch)=>{
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updateEmailParticular', {email}, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update email adress", error})
    }
}
// update email professional
export const editEmailProfessional=(email)=>async(dispatch)=>{
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updateEmailProfessional', {email}, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update email adress", error})
    }
}
// update password particular
export const editPasswordParticular=(password)=>async(dispatch)=>{
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updatePasswordParticular', {password}, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update password", error})        
    }
}
// update password professional
export const editPasswordProfessional=(password)=>async(dispatch)=>{
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updatePasswordProfessional', {password}, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update password", error})        
    }
}
// update photo particular
export const editPhotoParticular=(file)=>async(dispatch)=>{
    const data=new FormData()
    data.append('myImage',file)
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updatePhotoParticular', data, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update profile photo", error})
    }
}
// update photo professional
export const editPhotoProfessional=(file)=>async(dispatch)=>{
    const data=new FormData();
    data.append('myImage',file);
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updatePhotoProfessional', data, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update profile photo", error})
    }
}
// update passeport photo
export const editPassportParticular=(file)=>async(dispatch)=>{
    const data=new FormData();
    data.append('myImage',file);
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updatePasseportParticular', data, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update passeport photo", error})
    }
}
// update patent photo
export const editPatentPhoto=(file)=>async(dispatch)=>{
    const data=new FormData();
    data.append('myImage',file);
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updatePatentPhoto', data, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update patent photo", error})
    }
}
// update register phtoto
export const editCommercialRegister=(file)=>async(dispatch)=>{
    const data=new FormData();
    data.append('myImage',file);
    const config={
        headers:{
          authorization:localStorage.getItem('token')
        }
    }
    try {
        await axios.put('/api/profile/updateCommercialRegister', data, config)
        dispatch(getCurrentUser())
    } catch (error) {
        console.log({msg:"could not update commercial register photo", error})
    }
}