import mongoose from "mongoose";

const answersSchema = new mongoose.Schema(
    {
        id: { type: String },
        question_id: { type: String },
        user_id: { type: String },
        answer_text: { type: String, required: true },
        gained_likes_number: { type: Array },
        gained_dislikes_number: { type: Array },
    },
    {
        timestamps: true
    }
);

const answersModel = mongoose.model("Answer", answersSchema)

export default answersModel