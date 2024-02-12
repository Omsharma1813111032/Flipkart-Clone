const mongoose  = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },phone:{
        type:Number,
        required:true,
    },email:{
        type:String,
        required:true,
        unique:true
    },password:{
        required:true,
        type:String
    }

})


authSchema.pre("save",async function(next){
    this.password = await bcrypt.hash(this.password,12);
    next();

})

authSchema.methods.verifyPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

authSchema.methods.genrateToken = async function(email){
    return jwt.sign({email},process.env.SECRET_URL)
}


const Auth = mongoose.model('user',authSchema)
module.exports = Auth;