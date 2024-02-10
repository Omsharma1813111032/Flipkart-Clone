const mongoose = require("mongoose")

const getCon = async()=>{
    await mongoose.connect('mongodb://localhost:27017/flipkart_clone').then(()=>{console.log("DataBase Running")}).catch((err)=>{console.log(err)})
}
getCon()