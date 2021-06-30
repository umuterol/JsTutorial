const express = require("express");
const {getSingleUser,getAllUsers}=require("../controllers/user");
const {CheckUserExist}=require("../middlewares/database/databaseErrorHelpers");
const userQueryMiddleware=require("../middlewares/query/userQueryMiddleware");
const user = require("../models/user");
const router = express.Router();


router.get("/:id",CheckUserExist,getSingleUser);
router.get("/",userQueryMiddleware(user),getAllUsers);




module.exports = router;