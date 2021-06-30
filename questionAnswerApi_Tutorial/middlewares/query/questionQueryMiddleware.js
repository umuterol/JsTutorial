const asyncErrorWrapper = require("express-async-handler");
const { searchHelper,populateHelper,questionSortHelper,paginationHelper } = require("../../helpers/query/queryMiddlewareHelpers");






const questionQueryMiddleware=(model,options)=>{

    return asyncErrorWrapper(async (req,res,next)=>{

        let query=model.find();

        //search
        query=searchHelper(req,"title",query);

        //populate
        if(options.population){
            query=populateHelper(options.population,query);
        }



        //questionSort
        query=questionSortHelper(req,query);

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




module.exports = questionQueryMiddleware;







