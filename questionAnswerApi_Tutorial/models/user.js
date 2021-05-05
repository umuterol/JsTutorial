const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Question = require("./Question");


const userSchema = new Schema({

    name: {
        type: String,
        required: [true, "Plase provide a name"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid email"
        ]
    },

    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: [6, "Please provide a password with min length 6"],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String
    },
    about: {
        type: String
    },
    place: {
        type: String
    },
    website: {
        type: String
    },
    profile_image: {
        type: String,
        default: "default.jpg"
    },
    blocked: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    }

});

userSchema.methods.getResetPasswordTokenFromUser = function () {

    const { RESET_PASSWORD_EXPIRE } = process.env;
    const randomHexString = crypto.randomBytes(15).toString("hex");

    const resetPasswordToken = crypto
        .createHash("SHA256")
        .update(randomHexString)
        .digest("hex");

    this.resetPasswordToken = resetPasswordToken;
    this.resetPasswordExpire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE);

}


//userSchema Methods
userSchema.methods.generateJwtFromUser = function () {

    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

    const payload = {
        id: this._id,
        name: this.name,
        role: this.role
    };

    const token = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRE
    });

    return token;

};


//Pre Hooks
userSchema.pre("save", function (next) {
    //Parola Değişmemişse
    if (!this.isModified("password")) {
        next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) next(err);
            this.password = hash;
            next();
        });
    });

});


userSchema.post("remove", async function () {

    await Question.deleteMany({
        user: this.id
    });

});


module.exports = mongoose.model("user", userSchema);