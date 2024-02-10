require("dotenv").config()
require("./DB/dbCon")
const express = require("express")
const app = express();
app.use(express.json())
const cors = require("cors");
app.use(cors({
    origin:"http//localhost:3000",
    credentials:true
}))

app.get("/",(req,res)=>{res.send("Hii")})


app.listen(process.env.PORT,(req,res)=>{
    console.log("Server Running at Port no: ", process.env.PORT)
})




