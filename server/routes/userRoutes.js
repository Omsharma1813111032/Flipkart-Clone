const express = require("express")
const Auth = require("../controller/authController")
const userRouter = express.Router()


userRouter.post("/register",Auth.register)
userRouter.post("/login",Auth.login)


module.exports = {user:userRouter}