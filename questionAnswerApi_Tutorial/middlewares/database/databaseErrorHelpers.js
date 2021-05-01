const User = require("../../models/user");
const CustomError = require("../../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");


const CheckUserExist = asyncErrorWrapper(async (req, res, next) => {
    const id = req.params.id;

    const user = await User.findById(id);

    if (!user) {
        return next(new CustomError("There is no such user with that id", 400))
    }

    req.user = user;
    next();

});



module.exports = {
    CheckUserExist
}