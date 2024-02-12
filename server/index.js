require("dotenv").config()
require("./DB/dbCon")
const express = require("express")
const app = express();
const cors = require("cors");
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))


const {user} = require("./routes/userRoutes");
app.use(user)


app.listen(process.env.PORT,(req,res)=>{
    console.log("Server Running at Port no: ", process.env.PORT)
})   