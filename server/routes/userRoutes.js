const express = require("express")
const Auth = require("../controller/authController")
const userRouter = express.Router()


userRouter.post("/register",Auth.register)


module.exports = {user:userRouter}