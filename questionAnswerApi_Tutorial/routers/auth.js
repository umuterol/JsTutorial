const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const { register , errorTest , getUser , login , logout } = require("../controllers/auth");
const {getAccessToRoute}=require("../middlewares/authorization/auth");




router.post("/register", register);
router.get("/error", errorTest);
router.get("/profile",getAccessToRoute,getUser);
router.post("/login",login);
router.get('/logout',getAccessToRoute,logout);



// router.get("/" , (req , res) => {

//     res.send("auth home page");
// });


// router.get("/register" , (req , res) => {

//     res.send("auth register page");
// });



module.exports = router;