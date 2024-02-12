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


exports.login = async(req,res)=>{
    const {email,password} = req.body;

    const existUser = await Auth.findOne({email:email})

    if(!existUser){
        res.status(400).json({msg:"user does not exists!!"})
    }else{
        
        let verifyPassword = await existUser.verifyPassword(password)
        
        if(!verifyPassword){
            res.status(400).json({msg:"wrong credentails!!"})
        }else{

            let token = await existUser.genrateToken(email);

            res.status(200).json({msg:"user loggedin!!",data:existUser,token:token})


        }

    }



}