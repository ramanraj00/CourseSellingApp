app.post("/course/purchase",function(req,res){

    res.json({
        message:"Purchase this course"
    })
})


app.get("/user/courses",function(req,res){

    res.json({
        message:"Show all the courses purchased by the user"
    })
})
