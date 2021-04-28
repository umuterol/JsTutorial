const CustomError=require("../../helpers/errors/CustomError");
const customErrorHandler = (err, req, res, next) => {


    customError=err;

      if(err.name === "ValidationError")
      customError=new CustomError(err.message,400);

      if(err.name === "SyntaxError")
      customError=new CustomError(err.message,400);

      if(err.code === 11000)
      //Duplicate Key
      customError=new CustomError("Duplicate Key Found : Chech Your Input",400);



    

    res.
        status(customError.status || 500)
        .json({
            success: false,
            message:customError.message
        })

}


module.exports = customErrorHandler;