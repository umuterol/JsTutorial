const express = require("express");
const router = express.Router();
const { getAccessToRoute, getQuestionOwnerAccess } = require("../middlewares/authorization/auth");
const { askNewQuestion, getAllQuestions, getSingleQuestion, editQuestion, deleteQuestion, likeQuestion , undoLikeQuestion} = require("../controllers/questions");
const { CheckQuestionExist } = require("../middlewares/database/databaseErrorHelpers");



router.post("/ask", getAccessToRoute, askNewQuestion);
router.get("/", getAllQuestions);
router.get("/:id", CheckQuestionExist, getSingleQuestion);
router.put("/:id", [getAccessToRoute, CheckQuestionExist, getQuestionOwnerAccess], editQuestion);
router.delete("/:id", [getAccessToRoute, CheckQuestionExist, getQuestionOwnerAccess], deleteQuestion);
router.get("/:id/like", [getAccessToRoute, CheckQuestionExist], likeQuestion);
router.get("/:id/undo_like", [getAccessToRoute, CheckQuestionExist], undoLikeQuestion);





// router.get("/" , (req , res) => {

//     res.status(404).json({
//         success:true
//     });
// });


// router.get("/delete" , (req , res) => {

//     res.send("questions delete page");
// });



module.exports = router;