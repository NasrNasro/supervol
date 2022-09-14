const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    phone:{type:Number, required:true},
    birth:{type:Date, required:true},
    passport:{type:String, required:true},
    imageUrl:{type:String, required:true}, 
    imagePassport:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, enum:["user", "admin"], default:"user"},
    status:{type:String, default:"Particular"},
    isActive:{type:Boolean, default:false},
    activationCode:{type:String, required:true},
})

module.exports=mongoose.model('UserParticular', userSchema)