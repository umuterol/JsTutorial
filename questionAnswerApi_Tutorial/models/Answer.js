const Question = require("./Question");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({



    content: {
        type: String,
        required: [true, "Please provide a content"],
        minlength: [10, "Please provide a content at least 10 characters"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    likes: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "user"
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    question: {
        type: mongoose.Schema.ObjectId,
        ref: "question",
        required: true
    }



});


AnswerSchema.pre('save', async function (next) {

    if (!this.isNew) {
        return next();
    }



    try {

        const question = await Question.findById(this.question);

        question.answers.push(this._id);

        await question.save();

        return next();

    } catch (err) {

        return next(err);

    }

});


//remove
AnswerSchema.post('remove', async function (next) {



    try {
        const question = await Question.findById(this.question);

        const index=question.answers.indexOf(this._id);

        question.answers.splice(index,1);

        await question.save();

    } catch (error) {

        throw error;

    }

});
module.exports = mongoose.model("Answer", AnswerSchema);









