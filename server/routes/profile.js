const express=require('express')
const bcrypt = require('bcrypt');
const isAuth = require('../middlewares/isAuth')
const upload = require('../middlewares/upload')
const UserParticular = require('../models/UserParticular');
const { sendConfirmationNewEmail } = require('../nodemailer');
const UserProfessional = require('../models/UserProfessional');
const req = require('express/lib/request');
const router=express.Router()

router.put('/update', isAuth, upload.fields([{name:'photo', maxCount:1}, {name:'passportPhoto', maxCount:1}]), async(req,res)=>{
    try {
        await UserParticular.findByIdAndUpdate(req.user.id, {$set:{...req.body, imageUrl:req.files.photo[0].filename, imagePassport:req.files.passportPhoto[0].filename}})
        res.send("images uploaded")
    } catch (error) {
        res.status(500).send("server error")
    }
})
router.put('/updatePhoneParticular', isAuth, async(req,res)=>{
    try {
        await UserParticular.findByIdAndUpdate(req.user.id, {$set:{...req.body}})
        res.status(200).send({msg:"Phone number updated"})
    } catch (error) {
        res.status(500).send({msg:"server error", error})
    }
})
router.put('/updatePhoneProfessional', isAuth, async(req,res)=>{
    try {
        await UserProfessional.findByIdAndUpdate(req.user.id, {$set:{phone:req.body.phone}})
        res.status(200).send({msg:"Phone number updated"})
    } catch (error) {
        res.status(500).send({msg:"server error", error})        
    }
})
router.put('/updateEmailParticular', isAuth, async(req,res)=>{
    let {email}=req.body
    try {
        // find user before update
        let user=await UserParticular.findById(req.user.id)
        // compare old email and new one
        if (user.email===email){
            return res.status(400).send("Same email doesn't update")
        }
        // send confirmation email
        sendConfirmationNewEmail(user.email, user.activationCode)
        // update profile
        await UserParticular.findByIdAndUpdate(req.user.id, {$set:{...req.body, isActive:false}})
        res.status(200).send({msg:"Email adress updated"})
    } catch (error) {
        res.status(500).send({msg:"server error", error})
    }
})
router.put('/updateEmailProfessional', isAuth, async(req,res)=>{
    let {email}=req.body
    try {
        // find user before update
        let user=await UserProfessional.findById(req.user.id)
        // compare old email and new one
        if (user.email===email){
            return res.status(400).send("Same email doesn't update")
        }
        // send confirmation email
        sendConfirmationNewEmail(user.email, user.activationCode)
        // update profile
        await UserProfessional.findByIdAndUpdate(req.user.id, {$set:{...req.body, isActive:false}})
        res.status(200).send({msg:"Email adress updated"})
    } catch (error) {
        res.status(500).send({msg:"server error", error})
    }
})
router.put('/updatePasswordParticular', isAuth, async(req,res)=>{
    let {password}=req.body
    try {
        const salt=10
        req.body.password = await bcrypt.hash(password, salt)
        await UserParticular.findByIdAndUpdate(req.user.id, {$set:{...req.body}})
        res.status(200).send({msg:"Password updated"})
    } catch (error) {
        res.status(500).send({msg:"server error", error})
    }
})
router.put('/updatePasswordProfessional', isAuth, async(req,res)=>{
    let {password}=req.body
    try {
        const salt=10
        req.body.password = await bcrypt.hash(password, salt)
        await UserProfessional.findByIdAndUpdate(req.user.id, {$set:{...req.body}})
        res.status(200).send({msg:"Password updated"})
    } catch (error) {
        res.status(500).send({msg:"server error", error})
    }
})
router.put('/updatePhotoParticular', isAuth, upload.single("myImage"), async(req,res)=>{
    try {
        await UserParticular.findByIdAndUpdate(req.user.id, {$set:{imageUrl:req.file.filename}})
        res.send("Photo updated")
    } catch (error) {
        console.log(error)
        res.status(500).send("server error")
    }
})
router.put('/updatePhotoProfessional', isAuth, upload.single("myImage"), async(req,res)=>{
    try {
        await UserProfessional.findByIdAndUpdate(req.user.id, {$set:{imageUrl:req.file.filename}})
        res.send("Photo updated")
    } catch (error) {
        console.log(error)
        res.status(500).send("server error")
    }
})
router.put('/updatePasseportParticular', isAuth, upload.single("myImage"), async(req,res)=>{
    try {
        await UserParticular.findByIdAndUpdate(req.user.id, {$set:{imagePassport:req.file.filename}})
        res.send("Passeport Photo updated")
    } catch (error) {
        res.status(500).send({msg:"server error",error})
    }
})
router.put('/updatePatentPhoto', isAuth, upload.single("myImage"), async(req,res)=>{
    try {
        await UserProfessional.findByIdAndUpdate(req.user.id, {$set:{imagePatent:req.file.filename}})
        res.send("Patent photo updated")
    } catch (error) {
        res.status(500).send({msg:"server error",error})
    }
})
router.put('/updateCommercialRegister', isAuth, upload.single("myImage"), async(req,res)=>{
    try {
        await UserProfessional.findByIdAndUpdate(req.user.id, {$set:{imageCommercialRegister:req.file.filename}})
        res.send("Commercial register photo updated")
    } catch (error) {
        res.status(500).send({msg:"server error",error})
    }
})
module.exports=router