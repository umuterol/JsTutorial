const CustomError = require("../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const User = require("../models/user");
const user = require("../models/user");

const getSingleUser = asyncErrorWrapper(async (req, res, next) => {

    const user = req.user;

    return res.status(200)
        .json({
            success: true,
            data: user
        })

});


const getAllUsers = asyncErrorWrapper(async (req, res, next) => {

    const users = await User.find();

        res
            .status(200)
            .json({
                success: true,
                data: users
            })

});


module.exports = {
    getSingleUser,
    getAllUsers
}