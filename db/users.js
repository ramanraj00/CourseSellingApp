

const mongoose = require("../db/db");
const { Schema } = mongoose;

const userSchema = new Schema({
    email:{type:String, unique:true},
    password:String,
    firstname:String,
    lastname:String
})

const userModel = mongoose.model("user",userSchema);
module.exports = userModel;
