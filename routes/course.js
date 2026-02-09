const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function(req,res){
    res.json({
        message:"Purchase this course"
    });
});

courseRouter.get("/preview", function(req,res){
    res.json({
        message:"Show all the courses purchased by the user"
    });
});

module.exports = { courseRouter };
