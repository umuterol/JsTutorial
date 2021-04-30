const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const { register, errorTest, getUser, login, logout, imageUpload, forgotPassword, resetPassword } = require("../controllers/auth");
const { getAccessToRoute } = require("../middlewares/authorization/auth");
const path = require("path");
const upload = require("../helpers/libraries/profileImageUpload");






router.post("/register", register);
router.get("/error", errorTest);
router.get("/profile", getAccessToRoute, getUser);
router.post("/login", login);
router.get('/logout', getAccessToRoute, logout);
router.post('/upload', [getAccessToRoute, upload.single('avatar')], imageUpload);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword", resetPassword);






// router.get("/" , (req , res) => {

//     res.send("auth home page");
// });


// router.get("/register" , (req , res) => {

//     res.send("auth register page");
// });



module.exports = router;