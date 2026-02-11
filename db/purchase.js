const mongoose = require("../db/db")
const {Schema} = mongoose;


const purchaseSchema = new Schema({
    userId:ObjectId,
    courseId:ObjectId
})

const purchaseModel = mongoose.model("admin",purchaseSchema );
module.exports = purchaseModel ;