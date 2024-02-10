// import {products} from "./constant/data.js"
const productData = require("./constant/data")
const Product = require("./models/productSchema");



const DefaultData = async(req,res) =>{
    const data = productData;
    try{
        Product.deleteMany({})
        Product.insertMany(data).then(()=>{console.log("submitted")}).catch((err)=>{console.log(err)})    
    }catch(err){
        console.log(err)
    }

}

module.exports = DefaultData


