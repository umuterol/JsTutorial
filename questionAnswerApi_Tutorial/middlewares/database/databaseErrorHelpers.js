const User = require("../../models/user");
const CustomError = require("../../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const Question = require("../../models/Question");
const Answer = require("../../models/Answer");


const CheckUserExist = asyncErrorWrapper(async (req, res, next) => {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
        return next(new CustomError("There is no such user with that id", 400))
    }

    req.user = user;
    next();

});

const CheckQuestionExist = asyncErrorWrapper(async (req, res, next) => {

    const question = await Question.findById(req.params.id);

    if (!question) {
        next(new CustomError("There is no such question with that id", 400))
    }
    req.question = question;
    next();
});


const checkAnswerExistByQuestion = asyncErrorWrapper(async (req, res, next) => {

    const question_id = req.params.id;
    const answer_id = req.params.answer_id;

    const answer = await Answer.findOne({
        _id: answer_id,
        question: question_id
    });

    if (!answer) {
        return next(new CustomError("There is no answer with that id associated with question id", 400))
    }

    next();

});


module.exports = {
    CheckUserExist,
    CheckQuestionExist,
    checkAnswerExistByQuestion
}