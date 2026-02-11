const mongoose = require("../db/db")
const {Schema} = mongoose;

const  courseSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId: mongoose.Schema.Types.ObjectId

})

const CourseModel = mongoose.model("admin",courseSchema );
module.exports = CourseModel ;