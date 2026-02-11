const { mongoose } = require("../db/db");
const { Schema } = mongoose;

const adminSchema = new Schema({

    email:{type:String,unique:true},
    password:String,
    firstname:String,
    lastname:String

})

const adminModel =mongoose.model("admin",adminSchema);
module.exports = adminModel;