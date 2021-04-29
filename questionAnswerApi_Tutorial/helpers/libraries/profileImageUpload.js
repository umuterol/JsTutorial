const CustomError = require("../errors/CustomError");
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const rootDir = path.dirname(require.main.filename);
        const saveDir = rootDir + "/public/uploads/";
        cb(null, saveDir);

    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        const fileName = file.fieldname + "-" + req.user.id + extension;
        req.savedProfileImage = fileName;

        cb(null, fileName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpg", "image/jpeg", "image/png", "image/gif"]

    if (!allowedMimeTypes.includes(file.mimetype)) {
        return cb(new CustomError("Please provide a valid image file. Only jpg,jpeg,png,gif", 400), false);
    }

    return cb(null, true);
}


const limits = {
    fileSize: 1 * 1024 * 1024
}


module.exports = multer({ storage , fileFilter, limits });