const User = require("../models/user");
const CustomError = require("../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const { validateUserInput, comparePassword } = require("../helpers/input/inputHelpers");

const register = asyncErrorWrapper(
    async (req, res, next) => {

        const { name, email, password, role } = req.body;




        // POST DATA
        const newUser = await User.create({
            //ayni isim olunca gerek yok
            //  name:name
            name,
            email,
            password,
            role
        });

        sendJwtToClient(newUser, res);


    }
)





const errorTest = (req, res, next) => {

    return next(new TypeError("Hata Oluştu", 400));

}


const getUser = (req, res, next) => {

    res.json({
        success: true,
        data: req.user
    })

}

const login = asyncErrorWrapper(
    async (req, res, next) => {
        const { email, password } = req.body;

        if (!validateUserInput(email, password)) {
            return next(new CustomError("Please check your inputs", 400));
        }

        const user = await User.findOne({ email }).select("+password");



        if (!comparePassword(password, user.password)) {

            return next(new CustomError("Please check your credentials", 400));
        }



        sendJwtToClient(user, res);

    })





const logout = asyncErrorWrapper(
    async (req, res, next) => {
        const { NODE_ENV } = process.env;

      return res
            .status(200)
            .clearCookie('access_token')
            .json({
                success: true,
                message: "logout successfull"
            });
    }
)


module.exports = {
    register,
    errorTest,
    getUser,
    login,
    logout
}

