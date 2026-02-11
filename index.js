const express = require("express");
const {userRouter} = require("./routes/user");
const  {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");
const { connectDB } = require("./db/db");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin",adminRouter)
app.use("/api/v2/course",courseRouter);


async function startServer(req,res){
    //dotenv(figure it out)
    await connectDB();
    app.listen(3000, () => {
     console.log("App is running on port 3000")
    })
}

startServer()

