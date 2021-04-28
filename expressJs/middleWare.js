const accessControl=(req,res,next)=>{
   

    const access=false;
    

   if(!access){

    
    // res.json({
    //     success:false,
    //     message:"you are not authorized"
    // });

    //or
    res.status(401).json({
        success:false,
        message:"you are not authorized"
    });

   }

    
   next();

}



module.exports = {
    accessControl
}