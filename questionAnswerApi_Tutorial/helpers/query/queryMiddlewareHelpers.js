const { query } = require("express");

const searchHelper = (req, searchKey, query) => {


    const { search } = req.query;
    const searchObject = {};

    if (search) {
        const regex = new RegExp(search, "i");
        searchObject[searchKey] = regex;

        return query.where(searchObject);
    }

    return query;

}


const populateHelper = (population, query) => {

    return query.populate(population);

}

const questionSortHelper = (req, query) => {

    const sortKey = req.query.sortBy;

    if (sortKey === "most-answered") {
        return query.sort("-answerCount");
    }
    if (sortKey === "most-liked") {
        return query.sort("-likeCount");
    }

    return query.sort("-createdAt");

}


const paginationHelper=(req,total,query)=>{
    const page=parseInt(req.query.page) || 1;
    const limit=parseInt(req.query.limit)||5;

    const startIndex=(page-1)*limit;
    const endIndex=page*limit;

    const pagination={};


    if(startIndex > 0){
        pagination.previous={
            page:page-1,
            limit:limit
        };
    }
    if(endIndex < total){
        pagination.next={
            page:page+1,
            limit:limit
        };
    }

    return {
        query: query ? query.skip(startIndex).limit(limit) : undefined,
        pagination:pagination,
        startIndex,
        limit
    };

}


module.exports = {
    searchHelper,
    populateHelper,
    questionSortHelper,
    paginationHelper
};