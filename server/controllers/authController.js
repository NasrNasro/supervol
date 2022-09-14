const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserParticular = require('../models/UserParticular');
const UserProfessional = require('../models/UserProfessional');
const { sendConfirmationEmail } = require('../nodemailer');

exports.signUpParticular=async(req,res)=>{
    let {name, email, phone, birth, passport, password} = req.body
    try {
        // check user exists
        let foundUser=await UserParticular.findOne({email})
        if (!foundUser){
            foundUser=await UserProfessional.findOne({email})
        }
        if (foundUser){
            return res.status(400).send({errors:[{msg:'user already exists'}]})
        }
        // créer une chaine de caractères aléatoire
        const characters="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let activationCode=""
        for (let i = 0; i < 25; i++){
            activationCode += characters[Math.floor(Math.random() * characters.length)];
        }
        let user=await new UserParticular({...req.body, imageUrl:req.files.photo[0].filename, imagePassport:req.files.passportPhoto[0].filename, activationCode:activationCode})
        // hash password
        const salt=10;
        user.password=await bcrypt.hash(password, salt)
        await user.save()
        // send confirmation email
        sendConfirmationEmail(email, activationCode);
        // generate token
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload, process.env.secretOrKey,{expiresIn:'3d'})
        res.status(200).send({msg:"register with success", user, token})
    } catch (error) {
        console.log(error)
        res.status(500).send("server error")
    }
}
exports.signUpProfessional=async(req,res)=>{
    let {name, email, phone, birth, password} = req.body
    try {
        // check user exists
        let foundUser=await UserParticular.findOne({email})
        if (!foundUser){
            foundUser=await UserProfessional.findOne({email})
        }
        if (foundUser){
            return res.status(400).send({errors:[{msg:'user already exists'}]})
        }
        // créer une chaine de caractères aléatoire
        const characters="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let activationCode=""
        for (let i = 0; i < 25; i++){
            activationCode += characters[Math.floor(Math.random() * characters.length)];
        }
        let user=await new UserProfessional({...req.body, imageUrl:req.files.photo[0].filename, imagePatent:req.files.patentPhoto[0].filename, imageCommercialRegister:req.files.commercialRegister[0].filename, activationCode:activationCode})
        // hash password
        const salt=10;
        user.password=await bcrypt.hash(password, salt)
        await user.save()
        // send confirmation email
        sendConfirmationEmail(email, activationCode);
        // generate token
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload, process.env.secretOrKey,{expiresIn:'3d'})
        res.status(200).send({msg:"register with success", user, token})
    } catch (error) {
        res.status(500).send({msg:"server error", error})
    }
}
exports.signIn=async(req,res)=>{
    const {email,password}=req.body
    try {
        let user=await UserParticular.findOne({email})
        if (!user){
            user=await UserProfessional.findOne({email})
        }
        if(!user){
            return res.status(400).send({errors:[{msg:'Bad credentials'}]})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).send({errors:[{msg:'Bad credentials'}]})
        }
        if (!user.isActive){
            return res.status(400).send({errors:[{msg:'Please check your email for activation !'}]})
        }
        // generate token
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload, process.env.secretOrKey,{expiresIn:'3d'})
        res.status(200).send({msg:"login with success", user, token})
    } catch (error) {
        res.status(500).send("server error")
    }
}
exports.getCurrent=async(req,res)=>{
    try {
        let user=await UserParticular.findById(req.user.id)
        if (!user){
            user=await UserProfessional.findById(req.user.id)
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send("server error")
    }
}
exports.verifyUser=async(req,res)=>{
    const {activationcode}=req.params
    try {
        let user=await UserParticular.find({activationCode:activationcode})
        if (user){
            await UserParticular.findOneAndUpdate({activationCode:activationcode}, {isActive:true})
        }
        if (!user){
            user=await UserProfessional.find({activationCode:activationcode});
        }
        if (user){
            await UserProfessional.findOneAndUpdate({activationCode:activationcode}, {isActive:true});
        }
        if (!user){
            return res.status(400).send({errors:[{msg:'Activation code is invalid !'}]})
        }
        res.status(200).send({msg: "Account activated with success !"})    
    } catch (error) {
        console.log(error)
        res.status(500).send("server error")
    }
}