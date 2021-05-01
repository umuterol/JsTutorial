const express = require("express");
const { getAccessToRoute, getAdminAccess } = require("../middlewares/authorization/auth");
const { blockUser , deleteUser} = require("../controllers/admin");
const { CheckUserExist } = require("../middlewares/database/databaseErrorHelpers");

const router = express.Router();



router.use([getAccessToRoute, getAdminAccess]);

router.get("/block/:id", CheckUserExist, blockUser);
router.delete("/user/:id", CheckUserExist, deleteUser);





module.exports = router;