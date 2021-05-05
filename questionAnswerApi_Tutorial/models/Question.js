const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({

    title: {
        type: String,
        required: [true, "Please provide a title"],
        minlength: [10, "Please provide a title at least 10 characters"],
        unique: true
    },
    content: {
        type: String,
        required: [true, "Please provide a content"],
        minlength: [20, "Please provide a content at least 20 characters"]
    },
    slug: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    likes: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    ]


});


QuestionSchema.pre("save", function (next) {

    if (!this.isModified("slug")) {
        next();
    }

    this.slug = this.makeSlug();
    next();
});

QuestionSchema.methods.makeSlug = function () {

    return slugify(this.title, {
        remove: /[*+~.()'"!:@/]/g,
        lower: true
    });

}


module.exports = mongoose.model("question", QuestionSchema);