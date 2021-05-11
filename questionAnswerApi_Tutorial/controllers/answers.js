const Question = require("../models/Question");
const CustomError = require("../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const Answer = require("../models/Answer");
const { findById } = require("../models/Question");




const addNewAnswerToQuestion = asyncErrorWrapper(async (req, res, next) => {

    const question_id = req.params.id;
    const user_id = req.user.id;

    const informations = req.body;

    const answer = await Answer.create({
        ...informations,
        user: user_id,
        question: question_id
    });




    res.status(200)
        .json({
            success: true,
            data: answer
        })

});




const getAllAnswersByQuestion = asyncErrorWrapper(async (req, res, next) => {

    const question_id = req.params.id;

    const question = await Question.findById(question_id).populate('answers');

    const answers = question.answers;

    res.status(200)
        .json({
            success: true,
            count: answers.length,
            data: question.answers
        })


});


const getSingleAnswer = asyncErrorWrapper(async (req, res, next) => {

    const answer_id = req.params.answer_id;

    const answer = await Answer.findById(answer_id)
        .populate({ path: 'question', select: 'title content' })
        .populate({ path: 'user', select: 'name profile_image' });

    res.status(200)
        .json({
            success: true,
            data: answer
        });

});


const editAnswer = asyncErrorWrapper(async (req, res, next) => {

    const answer_id = req.params.answer_id;
    const { content } = req.body;

    const answer = await Answer.findById(answer_id);

    answer.content = content;

    await answer.save();

    res.status(200)
        .json({
            success: true,
            data: answer
        });

});


const deleteAnswer = asyncErrorWrapper(async (req, res, next) => {

    const { answer_id } = req.params;

    const answer = await Answer.findById(answer_id);

    await answer.remove();





    res.status(200)
        .json({
            success: true,
            message: "Answer deleted successful"
        });

});

const likeAnswer = asyncErrorWrapper(async (req, res, next) => {

    const { answer_id } = req.params;
    const user_id = req.user.id;

    const answer = await Answer.findById(answer_id);

    if(answer.likes.includes(user_id)){
        return next(new CustomError("You already liked this answer",400))
    }
  
    answer.likes.push(user_id);
    await answer.save();

    res.status(200)
        .json({
            success: true,
            data: answer
        })

});

const undoLikeAnswer = asyncErrorWrapper(async (req, res, next) => {

    const { answer_id } = req.params;
    const user_id = req.user.id;

    const answer = await Answer.findById(answer_id);

    if(!answer.likes.includes(user_id)){
        return next(new CustomError("You can not undo like operation for this answer",400));
    }
  
    answer.likes.splice(answer.likes.indexOf(user_id),1);
    await answer.save();

    res.status(200)
        .json({
            success: true,
            data: answer
        })

});

module.exports = {
    addNewAnswerToQuestion,
    getAllAnswersByQuestion,
    getSingleAnswer,
    editAnswer,
    deleteAnswer,
    likeAnswer,
    undoLikeAnswer
}