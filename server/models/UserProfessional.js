const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    phone:{type:Number, required:true},
    birth:{type:Date, required:true},
    imageUrl:{type:String, required:true}, 
    imagePatent:{type:String, required:true},
    imageCommercialRegister:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, enum:["user", "admin"], default:"user"},
    status:{type:String, default:"Professional"},
    isActive:{type:Boolean, default:false},
    activationCode:{type:String, required:true},
})

module.exports=mongoose.model('UserProfessional', userSchema)