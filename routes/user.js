
const {Router} = require("express");

const userRouter = Router()

userRouter.post("/signup",function (req,res){

    res.json({
        message:'signup end point'
    })
})



userRouter.post("/signin",function(req,res){

    res.json({
        message:'signin end point'
    })
})




userRouter.get("/purchase",function(req,res){

    res.json({
        message:"Show all the available courses"
    })
})

module.exports = {
    userRouter: userRouter
}
