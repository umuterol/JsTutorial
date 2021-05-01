const asyncErrorWrapper = require("express-async-handler");
const { CheckUserExist } = require("../middlewares/database/databaseErrorHelpers");


const blockUser = asyncErrorWrapper(async (req, res, next) => {
    console.log("test");
    const user = req.user;

    user.blocked = !user.blocked;

    await user.save();

    res.status(200)
        .json({
            access: true,
            message: "Block - Unblock Successful"
        })

}
)

const deleteUser = asyncErrorWrapper(async (req, res, next) => {
    
   const user = req.user;

    await user.remove();


    res.status(200)
    .json({
        success:true,
        message:"Delete Operation Successfull"
    })

});


module.exports = {
    blockUser,
    deleteUser
}