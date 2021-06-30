const asyncErrorWrapper = require("express-async-handler");
const { searchHelper,paginationHelper } = require("../../helpers/query/queryMiddlewareHelpers");






const userQueryMiddleware=(model,options)=>{

    return asyncErrorWrapper(async (req,res,next)=>{

        let query=model.find();

        //search
        query=searchHelper(req,"name",query);

        //pagination
        const total=await model.countDocuments();
        const paginationResult =paginationHelper(req,total,query);
       
        const pagination=paginationResult.pagination;
        query=paginationResult.query;

        const queryResults=await query;

        res.queryResults={
            success:true,
            count:queryResults.length,
            pagination:pagination,
            data:queryResults
        };

        next();

    });
};




module.exports = userQueryMiddleware;







