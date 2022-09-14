const express=require('express')
const router=express.Router()
const {signIn,getCurrent, signUpParticular, signUpProfessional, verifyUser}=require('../controllers/authController')
const {validator, loginRules, registerParticularRules, registerProfessionalRules}=require('../middlewares/validator');
const isAuth = require('../middlewares/isAuth');
const upload = require('../middlewares/upload');
// signup Particular
router.post('/signupParticular',upload.fields([{name:'photo', maxCount:1}, {name:'passportPhoto', maxCount:1}]),registerParticularRules,validator,signUpParticular)
// signup Professional
router.post('/signupProfessional',upload.fields([{name:'photo', maxCount:1}, {name:'patentPhoto', maxCount:1}, {name:'commercialRegister', maxCount:1}]),registerProfessionalRules,validator,signUpProfessional)
// signin
router.post('/signin',loginRules,validator,signIn)
// get current user
router.get('/current',isAuth,getCurrent)
router.post('/verifyuser/:activationcode',verifyUser)
module.exports=router