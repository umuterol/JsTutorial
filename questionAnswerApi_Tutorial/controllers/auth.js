const User = require("../models/user");
const CustomError = require("../helpers/errors/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const { validateUserInput, comparePassword } = require("../helpers/input/inputHelpers");
const sendEmail = require("../helpers/libraries/nodemailer");
const path = require("path");

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


const imageUpload = asyncErrorWrapper(
    async (req, res, next) => {

        const user = await User.findByIdAndUpdate(req.user.id, {
            profile_image: req.savedProfileImage
        }, { //return uploded user
            new: true,
            runValidators: true
        }
        )

        res
            .status(200)
            .json({
                success: true,
                message: "image upload successful",
                data: user
            })
    }
)

//Forgot Password
const forgotPassword = asyncErrorWrapper(
    async (req, res, next) => {

        const resetEmail = req.body.email;
        const user = await User.findOne({ email: resetEmail });

        if (!user) {
            return next(new CustomError("there is no user with that email", 400));
        }

        user.getResetPasswordTokenFromUser();

        await user.save();

        resetPasswordToken = user.resetPasswordToken;


        try {
            await sendEmail({
                from: process.env.SMTP_USER,
                to: resetEmail,
                subject: "Reset Your Password",
                html: `
                <h1>This is Reset Your Password URL</h1>  
                <p>This
                <a href='http://localhost:5000/api/auth/resetpassword?resetPasswordToken=${resetPasswordToken}' target='_blank'>${resetPasswordToken}</a>
                will expire in 5 minutes
                </p>
                ` });

            return res
                .status(200)
                .json({
                    success: true,
                    message:"Token Sent To Your Mail"
                })

        }
        catch (err) {
            user.resetPasswordToken = null;
            user.resetPasswordExpire = null;

            await user.save();

            return next(new CustomError("Email Could Not Be Sent", 500));
        }



    }
);



const resetPassword = asyncErrorWrapper(async (req, res, next) => {

    const { resetPasswordToken } = req.query;

    const { password } = req.body;

    if (!resetPasswordToken) {
        return next(new CustomError("Please provide a valid token", 400));
    }

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });


    if (!user) {
        return next(new CustomError("Invalid Token or Session Expired", 400));
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();




    res
        .status(200)
        .json({
            success: true,
            message: "Reset Password Process Successful"
        })
});


module.exports = {
    register,
    errorTest,
    getUser,
    login,
    logout,
    imageUpload,
    forgotPassword,
    resetPassword
}

