const mongoose  = require("mongoose")
const bcrypt = require("bcryptjs")

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



const Auth = mongoose.model('user',authSchema)
module.exports = Auth;