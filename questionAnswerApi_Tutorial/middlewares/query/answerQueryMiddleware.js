const asyncErrorWrapper = require("express-async-handler");
const { paginationHelper,populateHelper } = require("../../helpers/query/queryMiddlewareHelpers");



const answerQueryMiddleware = (model, options) => {


    return asyncErrorWrapper(async (req, res, next) => {

        const { id } = req.params;

        //pagination
        const total = (await model.findById(id))["answerCount"];


        const { pagination, startIndex, limit } = paginationHelper(req, total);

        const queryObject = {};

        queryObject["answers"] = { $slice: [ startIndex, limit ] };

        let query =model.find({ _id: id },queryObject);


        //populate
        query=populateHelper(options.population,query);


        const queryResults=await query;

        res.queryResults = {
            success: true,
            pagination,
            data:queryResults

        }

        next();
    });
};




module.exports = answerQueryMiddleware;