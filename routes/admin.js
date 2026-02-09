const {Router} = require("express");
const adminRouter = Router()

adminRouter.post("/signup", function(req,res){

    res.json({
        messgae:"This is for admin signup"
    })
})

adminRouter.post("/signin", function(req,res){

    res.json({
        messgae:"This is for admin signin"
    })
})

adminRouter.post("/courseupload", function(req,res){

    res.json({
        messgae:"This is for admin courseupload"
    })
})

adminRouter.put("/courseedit",function(req,res){

    res.json({
        message:"This is to edit Uploaded course"
    })
})

adminRouter.get("/tocheckcourseuploded",function(req,res){

    res.json({
        message:"This is to see all the courses Uploded by admin"
    })
})

module.exports={
    adminRouter:adminRouter
}