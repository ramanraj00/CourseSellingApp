app.post("/user/signup",function (req,res){

    res.json({
        message:'signup end point'
    })
})



app.post("/user/signin",function(req,res){

    res.json({
        message:'signin end point'
    })
})




app.get("/user/purchase",function(req,res){

    res.json({
        message:"Show all the available courses"
    })
})
