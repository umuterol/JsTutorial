const express = require("express");
const {
     addNewAnswerToQuestion, 
     getAllAnswersByQuestion, 
     getSingleAnswer, 
     editAnswer,
     deleteAnswer,
     likeAnswer,
     undoLikeAnswer 
    } = require("../controllers/answers");
const { getAccessToRoute,getAnswerOwnerAccess } = require("../middlewares/authorization/auth");
const { checkAnswerExistByQuestion } = require("../middlewares/database/databaseErrorHelpers")

const { route } = require("./questions");
const router = express.Router({ mergeParams: true });



router.post("/", getAccessToRoute, addNewAnswerToQuestion);
router.get("/", getAllAnswersByQuestion);
router.get("/:answer_id", checkAnswerExistByQuestion, getSingleAnswer);
router.put("/:answer_id", [checkAnswerExistByQuestion,getAccessToRoute,getAnswerOwnerAccess], editAnswer);
router.delete("/:answer_id", [checkAnswerExistByQuestion,getAccessToRoute,getAnswerOwnerAccess], deleteAnswer);
router.get("/:answer_id/like",[checkAnswerExistByQuestion,getAccessToRoute],likeAnswer);
router.get("/:answer_id/undo_like",[checkAnswerExistByQuestion,getAccessToRoute],undoLikeAnswer);



module.exports = router;