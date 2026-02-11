
const {mongoose} = require("mongoose");

 async function connectDB(req,res){

    await mongoose.connect("mongodb+srv://r02519625_db_user:iSPySMR16cdnrZZs@cluster0.cggwks0.mongodb.net/coursesellingapp");
 }



module.exports ={
    mongoose,
    connectDB
}
