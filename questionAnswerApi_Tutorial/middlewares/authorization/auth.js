const CustomError = require("../../helpers/errors/CustomError");
const jwt = require("jsonwebtoken");
const { isTokenIncluded, getAccessTokenFromHeader } = require("../../helpers/authorization/tokenHelpers");
const Question = require("../../models/Question");
const asyncErrorWrapper = require("express-async-handler");
const Answer = require("../../models/Answer");



const getAccessToRoute = (req, res, next) => {
    //Token
    const { JWT_SECRET_KEY } = process.env;

    if (!isTokenIncluded(req)) {
        return next(
            new CustomError("You are not authorized to access this route", 401)
        );
    }

    const accessToken = getAccessTokenFromHeader(req);

    jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return next(new CustomError("You are not authorized to access this route"), 401);
        }
        req.user = {
            id: decoded.id,
            name: decoded.name,
            role: decoded.role
        };
        next();
    })



}


const getAdminAccess = (req, res, next) => {

    const { role } = req.user;

    if (role !== "admin") {
        return next(new CustomError("Only admins can access this route", 403));
    }

    next();
}

const getQuestionOwnerAccess = asyncErrorWrapper(async (req, res, next) => {

    const userId = req.user.id;
    const questionId = req.params.id;

    const question = await Question.findById(questionId);

    if (question.user != userId) {
        return next(new CustomError("Only owner can handle this operation",403));
    }

    req.question = question;
    next();

});


const getAnswerOwnerAccess=asyncErrorWrapper(async (req, res, next) => {

    const answer_id = req.params.answer_id;
    const user_id=req.user.id;

    const answer = await Answer.findOne({
        _id: answer_id,
        user: user_id
    });

    if (!answer) {
        return next(new CustomError("Only owner can handle this operation",403));
    }

    next();

});



module.exports = {
    getAccessToRoute,
    getAdminAccess,
    getQuestionOwnerAccess,
    getAnswerOwnerAccess
}