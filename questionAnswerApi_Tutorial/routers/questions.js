const express = require("express");
const { getAccessToRoute, getQuestionOwnerAccess } = require("../middlewares/authorization/auth");
const { askNewQuestion, getAllQuestions, getSingleQuestion, editQuestion, deleteQuestion, likeQuestion, undoLikeQuestion } = require("../controllers/questions");
const { CheckQuestionExist } = require("../middlewares/database/databaseErrorHelpers");
const answers = require("./answers");
const questionQueryMiddleware = require("../middlewares/query/questionQueryMiddleware");
const Question = require("../models/Question");
const answerQueryMiddleware = require("../middlewares/query/answerQueryMiddleware");



const router = express.Router();



router.post("/ask", getAccessToRoute, askNewQuestion);
router.get("/", questionQueryMiddleware(Question,
    {
        population:{
            path:"user",
            select:"name profile_image"
        }
    }
), getAllQuestions);
router.get("/:id",answerQueryMiddleware(Question,{
    population:[
        {
            path:"answers",
            select:"content"
        },
        {
            path:"user",
            select:"name profile_image"
        }
    ]
}), CheckQuestionExist, getSingleQuestion);
router.put("/:id", [getAccessToRoute, CheckQuestionExist, getQuestionOwnerAccess], editQuestion);
router.delete("/:id", [getAccessToRoute, CheckQuestionExist, getQuestionOwnerAccess], deleteQuestion);
router.get("/:id/like", [getAccessToRoute, CheckQuestionExist], likeQuestion);
router.get("/:id/undo_like", [getAccessToRoute, CheckQuestionExist], undoLikeQuestion);


router.use("/:id/answers", CheckQuestionExist, answers);




// router.get("/" , (req , res) => {

//     res.status(404).json({
//         success:true
//     });
// });


// router.get("/delete" , (req , res) => {

//     res.send("questions delete page");
// });



module.exports = router;