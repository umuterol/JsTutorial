const express = require("express");
const {getSingleUser,getAllUsers}=require("../controllers/user");
const {CheckUserExist}=require("../middlewares/database/databaseErrorHelpers");

const router = express.Router();


router.get("/:id",CheckUserExist,getSingleUser);
router.get("/",getAllUsers);




module.exports = router;