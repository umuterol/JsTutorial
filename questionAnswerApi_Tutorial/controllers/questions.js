const Question = require("../models/Question");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../helpers/errors/CustomError");



const askNewQuestion = asyncErrorWrapper(async (req, res, next) => {


    const question = await Question.create({
        ...req.body,
        user: req.user.id
    });


    res.status(200)
        .json({
            success: true,
            data: question
        });



});



const getAllQuestions = asyncErrorWrapper(async (req, res, next) => {

    res.status(200).json(res.queryResults);
});


const getSingleQuestion = asyncErrorWrapper(async (req, res, next) => {

    res.status(200)
        .json(res.queryResults);

});

const editQuestion = asyncErrorWrapper(async (req, res, next) => {

    const { title, content } = req.body;
    const question = req.question;

    question.title = title;
    question.content = content;

    await question.save();

    res.status(200)
        .json({
            success: true,
            data: question
        })
}
)

const deleteQuestion = asyncErrorWrapper(async (req, res, next) => {

    const { id } = req.params;

    await Question.findByIdAndDelete(id);

    res.status(200)
        .json({
            success: true,
            message: "Question Delete Operation Successful"
        })

})

const likeQuestion = asyncErrorWrapper(async (req, res, next) => {

    const question = req.question;
    const userId = req.user.id;

    if (question.likes.includes(userId)) {
        return next(new CustomError("You already liked this question", 400));
    }

    question.likes.push(userId);
    question.likeCount=question.likes.length;
    await question.save();

    res.status(200)
        .json({
            success: true,
            data: question
        });

});

const undoLikeQuestion = asyncErrorWrapper(async (req, res, next) => {

    const question = req.question;
    const userId = req.user.id;

    if (!question.likes.includes(userId)) {
        return next(new CustomError("You can not undo like operation for this question", 400));
    }

    const index=question.likes.indexOf(userId);
    question.likes.splice(index,1);
    question.likeCount=question.likes.length;
    await question.save();

    res.status(200)
        .json({
            success: true,
            data: question
        });

});
module.exports = {
    askNewQuestion,
    getAllQuestions,
    getSingleQuestion,
    editQuestion,
    deleteQuestion,
    likeQuestion,
    undoLikeQuestion
}