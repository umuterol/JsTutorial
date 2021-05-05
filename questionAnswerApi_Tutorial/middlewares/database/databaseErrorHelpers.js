const User = require("../../models/user");
const CustomError = require("../../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const Question = require("../../models/Question");


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



module.exports = {
    CheckUserExist,
    CheckQuestionExist
}