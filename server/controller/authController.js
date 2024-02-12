const Auth = require("../models/userSchema")



exports.register = async(req,res)=>{
 

    try{

        const {email} = req.body;

        const userExists = await Auth.findOne({email:email})

        if(!userExists){
            const data = new Auth(req.body);       
            await data.save();
            res.status(200).json({msg:"Successful",data})
        }else{
            res.status(400).json({msg:"user exists alreaady"})
        }

        



    }catch(err){
        res.status(400).json({error:err})
    }
    

}