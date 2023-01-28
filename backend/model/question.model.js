import mongoose from "mongoose";

let questionSchema = mongoose.Schema({
    category: { type:String, enum:["General Knowledge", "Sports", "Geography"] },
    difficulty:{ type:String, enum:["easy", "medium", "hard"] },
    question:{ type:String },
    correct_answer:{ type:String },
    incorrect_answers:[{ type:[String] }]

})

let Question = mongoose.model("Question", questionSchema);

export default Question;