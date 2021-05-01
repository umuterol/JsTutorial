const CustomError = require("../../helpers/errors/CustomError");
const jwt = require("jsonwebtoken");
const { isTokenIncluded, getAccessTokenFromHeader } = require("../../helpers/authorization/tokenHelpers");
const getAccessToRoute = (req, res, next) => {

    //Token
    const { JWT_SECRET_KEY } = process.env;

    if (!isTokenIncluded(req)) {
        return next(
            new CustomError("You are not authorized to access this route", 401)
        );
    }

    const accessToken = getAccessTokenFromHeader(req);

    jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return next(new CustomError("You are not authorized to access this route"), 401);
        }
        req.user = {
            id: decoded.id,
            name: decoded.name,
            role: decoded.role
        };
        next();
    })



}


const getAdminAccess = (req, res, next) => {

    const { role } = req.user;

    if (role !== "admin") {
        return next(new CustomError("Only admins can access this route", 403));
    }

    next();
}

module.exports = {
    getAccessToRoute,
    getAdminAccess
}