const Products = require("../models/productSchema")


exports.products = async(req,res)=>{

    try{
        const response  = await Products.find({})
        res.status(200).json(respnse)
    }catch(err){
        res.status(400).json(err)
    }

}