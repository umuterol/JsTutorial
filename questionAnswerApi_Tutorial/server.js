const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const path=require("path"); //in expresse


//Environment Variables
dotenv.config({
    path: "./config/env/config.env"
})

const app = express();
const PORT = process.env.PORT;


//express - body json
app.use(express.json());


//Routers middleWare
app.use("/api", routers);



//MongoDb Connection
connectDatabase();


// Error Handler
app.use(customErrorHandler);

//Static Files
app.use(express.static(path.join(__dirname,"public")));




// app.get("/", (req,res,next)=>{

//     res.send("test");

// })



app.listen(PORT, () => {
    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);


})