const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");

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




// app.get("/", (req,res,next)=>{

//     res.send("test");

// })



app.listen(PORT, () => {
    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);


})